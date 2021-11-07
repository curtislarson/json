import { default as standaloneCode } from "https://cdn.skypack.dev/ajv@v8.6.3?dts";
import Ajv, { AnySchema } from "https://cdn.skypack.dev/ajv@v8.6.3?dts";

export const compileOne = (ajv: Ajv, schema: AnySchema) => {
  const compiled = ajv.compile(schema);
  return standaloneCode(ajv, compiled);
};
