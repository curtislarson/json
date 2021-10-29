import Ajv2020 from "https://esm.sh/ajv/dist/2020";
import Ajv from "https://esm.sh/ajv";
import addFormats from "https://esm.sh/ajv-formats";

import { expandGlob } from "https://deno.land/std@0.112.0/fs/mod.ts";
import { red } from "https://deno.land/std@0.112.0/fmt/colors.ts";

const ajv2020 = new Ajv2020({
  strictTypes: false,
  validateFormats: false,
  allowMatchingProperties: true,
});
addFormats(ajv2020 as unknown as Ajv);

for await (const file of expandGlob("./dist/2020/**/*.schema.json")) {
  Deno.test(`${file.path} is valid schema`, async () => {
    const str = await Deno.readTextFile(file.path);
    const schema = JSON.parse(str);
    try {
      ajv2020.addSchema(schema);
      ajv2020.compile(schema);
    } catch (e) {
      console.error(red(`Validation failed for schema ${file.path}`), { e });
      throw e;
    }
  });
}
