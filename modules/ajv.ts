import addFormats from "https://esm.sh/ajv-formats";
import moreFormats from "https://esm.sh/ajv-formats-draft2019";
import Ajv from "https://cdn.skypack.dev/ajv@v8.6.3?dts";

const opts = {
  strictTypes: false,
  validateFormats: false,
  allowMatchingProperties: true,
};

export const getAjv07 = (code: boolean) => {
  const allOpts = code
    ? {
        ...opts,
        code: {
          source: true,
        },
      }
    : opts;
  const ajv07 = new Ajv(allOpts);
  // deno-lint-ignore no-explicit-any
  addFormats(ajv07 as any);
  moreFormats(ajv07);
  return ajv07;
};
