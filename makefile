test:
	deno fmt --config deno.json --check
	deno lint
	deno test --unstable --allow-read schema.test.ts

.PHONY: test