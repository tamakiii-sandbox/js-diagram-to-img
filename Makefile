.PHONY: install uninstall

MAKE := $(shell which make)

install:
	@$(MAKE) setup
	@npm install
	@$(MAKE) install-normalize-css

setup:
	@mkdir -p sample/vendor/normalize.css

install-normalize-css:
	@cp node_modules/normalize.css/normalize.css sample/vendor/normalize.css/normalize.css

uninstall:
	@rm -rf node_modules

