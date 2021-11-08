test:
	deno fmt --config deno.json --check
	deno lint
	deno test --unstable --allow-read

fix:
	deno fmt --config deno.json

.PHONY: test