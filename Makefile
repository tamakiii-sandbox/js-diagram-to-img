.PHONY: install uninstall

MAKE := $(shell which make)
DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
WEBPACK := $(shell realpath node_modules/.bin/webpack)

install:
	@$(MAKE) setup
	@npm install
	@$(MAKE) install-normalize-css install-jquery install-jquery-base64

setup:
	@mkdir -p sample/vendor/{normalize.css,jquery,jquery.base64}

install-normalize-css:
	@cp node_modules/normalize.css/normalize.css sample/vendor/normalize.css/normalize.css

install-jquery:
	@cp node_modules/jquery/dist/jquery.slim.min.js sample/vendor/jquery/jquery.slim.min.js

install-jquery-base64:
	@cp node_modules/jquery.base64/jquery.base64.js sample/vendor/jquery.base64/jquery.base64.js

build:
	@cd src/sample/webpack && $(WEBPACK) --config config.js index.js $(DIR)/sample/webpack/bundle.js
	@cd src/sample/chart.js && $(WEBPACK) --config config.js index.js $(DIR)/sample/chart.js/bundle.js
	@cd src/sample/3d && $(WEBPACK) --config config.js index.js $(DIR)/sample/3d/bundle.js

uninstall:
	@rm -rf node_modules
