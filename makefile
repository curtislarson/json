clean:
	deno fmt --config deno.json
	deno lint --config deno.json

test:
	deno test --unstable --allow-read

.PHONY: clean test