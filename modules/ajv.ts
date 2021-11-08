import addFormats from "https://esm.sh/ajv-formats";
import moreFormats from "https://esm.sh/ajv-formats-draft2019";
import Ajv, { AnySchema } from "https://esm.sh/ajv";

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
  moreFormats(ajv07);
  return ajv07;
};
