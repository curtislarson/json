import Ajv2020 from "https://cdn.skypack.dev/ajv@v8.6.3/dist/2020?dts";
import Ajv from "https://cdn.skypack.dev/ajv@v8.6.3?dts";

import addFormats from "https://esm.sh/ajv-formats";
import moreFormats from "https://esm.sh/ajv-formats-draft2019";

const sharedOpts = {
  strictTypes: false,
  validateFormats: false,
  allowMatchingProperties: true,
  code: {
    source: true,
  },
};

const ajv2020 = new Ajv2020(sharedOpts);
addFormats(ajv2020);
moreFormats(ajv2020);
export const getAjv2020 = () => {
  return ajv2020;
};

const ajv07 = new Ajv(sharedOpts);
addFormats(ajv07);
moreFormats(ajv07);
export const getAjv07 = () => {
  return ajv07;
};
