import { getAjv07 } from "../modules/ajv.ts";

import { red } from "https://deno.land/std@0.114.0/fmt/colors.ts";
import { schemaReader } from "../modules/fs.ts";

const ajv = getAjv07(false);

const root = new URL("../json-schema", import.meta.url).pathname;

for await (const file of schemaReader(root)) {
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
