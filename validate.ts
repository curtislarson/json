import Ajv from "https://esm.sh/ajv";
import { expandGlob } from "https://deno.land/std@0.112.0/fs/mod.ts";
import { green, red } from "https://deno.land/std@0.112.0/fmt/colors.ts";

const ajv = new Ajv();

for await (const file of expandGlob("./s/**/*")) {
  const str = await Deno.readTextFile(file.path);
  const schema = JSON.parse(str);
  try {
    ajv.addSchema(schema);
    ajv.compile(schema);
    console.log(`✔️ ${green(file.name)}`);
  } catch (e) {
    console.error(red(`Validation failed for schema ${file.path}`), { e });
    throw e;
  }
}

console.log(green("All schemas valid"));
