import Ajv2020 from "https://cdn.skypack.dev/ajv@v8.6.3/dist/2020?dts";

export const getAjv2020 = () => {
  const opts = {
    strictTypes: false,
    validateFormats: false,
    allowMatchingProperties: true,
  };
  const ajv2020 = new Ajv2020(opts);
  addFormats(ajv2020);
  moreFormats(ajv2020);
  return ajv2020;
};
