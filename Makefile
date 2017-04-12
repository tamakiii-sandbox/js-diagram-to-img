.PHONY: install uninstall

MAKE := $(shell which make)
WEBPACK := node $(shell realpath node_modules/webpack/bin/webpack.js)

install:
	@$(MAKE) setup
	@npm install
	@$(MAKE) install-normalize-css install-jquery

setup:
	@mkdir -p sample/vendor/{normalize.css,jquery}

install-normalize-css:
	@cp node_modules/normalize.css/normalize.css sample/vendor/normalize.css/normalize.css

install-jquery:
	@cp node_modules/jquery/dist/jquery.slim.min.js sample/vendor/jquery/jquery.slim.min.js

#install-jquery-base64:
#	@cp node_modules/js-base64/base64.min.js sample/vendor/js-base64/base64.min.js

sample-webpack:
	@cd sample/webpack && $(WEBPACK) --config config.js index.js bundle.js

uninstall:
	@rm -rf node_modules
