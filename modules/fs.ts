import { walk } from "https://deno.land/std@0.114.0/fs/mod.ts";

export async function* schemaReader(dir: string) {
  for await (const file of walk(dir, {
    includeDirs: false,
    exts: ["json"],
    skip: [new RegExp("2020.*")],
    maxDepth: 2,
  })) {
    yield file;
  }
}
