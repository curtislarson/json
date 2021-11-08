import standaloneCode from "https://esm.sh/ajv/dist/standalone?pin=v54";
import Ajv, { AnySchema } from "https://esm.sh/ajv?pin=v54";

export const compileOne = (ajv: Ajv, schema: AnySchema) => {
  const compiled = ajv.compile(schema);
  return standaloneCode(ajv, compiled);
};

export const compileAll = (ajv: Ajv) => {
  return standaloneCode(ajv);
};

export const compileMap = (ajv: Ajv, keyToSchemaId: Record<string, string>) => {
  return standaloneCode(ajv, keyToSchemaId);
};
