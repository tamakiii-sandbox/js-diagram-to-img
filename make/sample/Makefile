.PHONY: install build

MAKE := $(shell which make)

install: setup install-normalize-css install-jquery install-jquery-base64

setup:
	@mkdir -p $(DIR)/sample/vendor/{normalize.css,jquery,jquery.base64}

build:
	@cd src/sample/webpack && $(WEBPACK) --config config.js index.js $(DIR)/sample/webpack/bundle.js
	@cd src/sample/chart.js && $(WEBPACK) --config config.js index.js $(DIR)/sample/chart.js/bundle.js
	@cd src/sample/3d && $(WEBPACK) --config config.js index.js $(DIR)/sample/3d/bundle.js

install-normalize-css:
	@cp $(DIR)/node_modules/normalize.css/normalize.css $(DIR)/sample/vendor/normalize.css/normalize.css

install-jquery:
	@cp $(DIR)/node_modules/jquery/dist/jquery.slim.min.js $(DIR)/sample/vendor/jquery/jquery.slim.min.js

install-jquery-base64:
	@cp $(DIR)/node_modules/jquery.base64/jquery.base64.js $(DIR)/sample/vendor/jquery.base64/jquery.base64.js

