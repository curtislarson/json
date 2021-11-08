import { getAjv07 } from "../modules/ajv.ts";
import { compileOne } from "../modules/compile.ts";
import requireFromString from "https://esm.sh/require-from-string";
import { assertEquals } from "https://deno.land/std@0.112.0/testing/asserts.ts";

const testSchema = JSON.stringify({
  $id: "connection.json",
  type: "object",
  required: ["hostname", "port", "username", "password"],
  additionalProperties: false,
  properties: {
    hostname: { type: "string" },
    port: { type: "number" },
    username: { type: "string" },
    password: { type: "string" },
  },
});

Deno.test("compile validate works", () => {
  const ajv = getAjv07(true);
  const parsed = JSON.parse(testSchema);
  const moduleString = compileOne(ajv, parsed);

  const validator = requireFromString(moduleString);

  const data = {
    hostname: "foo",
    port: 22,
    username: "AzureDiamond",
    password: "hunter2",
  };

  assertEquals(validator(data), true);
});
