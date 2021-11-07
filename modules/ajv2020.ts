import Ajv2020 from "https://esm.sh/ajv/dist/2020";
import addFormats from "https://esm.sh/ajv-formats";
import moreFormats from "https://esm.sh/ajv-formats-draft2019";

export const getAjv2020 = () => {
  const opts = {
    strictTypes: false,
    validateFormats: false,
    allowMatchingProperties: true,
  };
  const ajv2020 = new Ajv2020(opts);
  // deno-lint-ignore no-explicit-any
  addFormats(ajv2020 as any);
  moreFormats(ajv2020);
  return ajv2020;
};
