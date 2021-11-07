import { getAjv07 } from "./modules/ajv.ts";

import { expandGlob } from "https://deno.land/std@0.112.0/fs/mod.ts";
import { red } from "https://deno.land/std@0.112.0/fmt/colors.ts";

const ajv = getAjv07();

for await (const file of expandGlob("./dist/**/*.schema.json", {
  exclude: ["**/2020/**"],
})) {
  Deno.test(`${file.path} is valid schema`, async () => {
    const str = await Deno.readTextFile(file.path);
    const schema = JSON.parse(str);
    try {
      ajv.addSchema(schema);
      ajv.compile(schema);
    } catch (e) {
      console.error(red(`Validation failed for schema ${file.path}`), { e });
      throw e;
    }
  });
}
