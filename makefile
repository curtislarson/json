test:
	deno fmt --check
	deno lint
	deno test --unstable --allow-read

.PHONY: test