.PHONY: install uninstall

MAKE := $(shell which make)
DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
WEBPACK := $(shell realpath node_modules/.bin/webpack 2> /dev/null)

install:
	@npm install

install-sample: install
	@$(MAKE) -C make/sample install DIR=$(DIR)

build:
	@$(WEBPACK) --config config.js index.js dist/bundle.js

build-sample:
	@$(MAKE) -C make/sample build DIR=$(DIR)

uninstall:
	@rm -rf node_modules
