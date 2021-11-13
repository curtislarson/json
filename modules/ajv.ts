import addFormats from "https://cdn.skypack.dev/ajv-formats@v2.1.1?dts";
import Ajv, { AnySchema } from "https://cdn.skypack.dev/ajv@v8.7.1?dts";

export const Opts = {
  strictTypes: false,
  validateFormats: false,
  allowMatchingProperties: true,
};
export const CodeOpts = {
  ...Opts,
  code: {
    source: true,
  },
};

export type { AnySchema };
export const getAjv07 = (code: boolean) => {
  const allOpts = code ? CodeOpts : Opts;
  const ajv07 = new Ajv(allOpts);
  // deno-lint-ignore no-explicit-any
  addFormats(ajv07 as any);
  return ajv07;
};
