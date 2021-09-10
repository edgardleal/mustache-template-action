#
# Makefile
# edgardleal, 2020-03-12 09:50
#

DONE = echo ✓ $@ done
SOURCES = $(shell find src/ -type f -name '*.ts') index.ts
APP_NAME = $(shell cat package.json 2>/dev/null | $(call JSON_GET_VALUE,name))
modules = $(wildcard node_modules/*/*.js)
.PHONY: all clean help run build install lint

all: run

node_modules/.last_lint: $(SOURCES)
	yarn lint || npm run lint
	touch node_modules/.last_lint

lint: node_modules/.last_lint

node_modules/.bin/tsc: package.json
	yarn || npm i
	touch node_modules/.bin/tsc

run: dist/index.js lint
	DEBUG=sanar* node dist/index.js

dist/index.js: $(SOURCES) node_modules/.bin/tsc
	./node_modules/.bin/tsc -p tsconfig.json

build: dist/index.js

node_modules/.bin/jest: package.json
	yarn || npm i
	touch node_modules/.bin/jest

install: node_modules/.bin/jest

coverage/index.html: $(SOURCES) node_modules/.bin/jest
	DEBUG=sanar* yarn test --coverage --coverageReporters html

test: coverage/index.html

compile: dist/index.js

clean: ## clean: Remove ./node_modules and call clean in all children projects
	rm -rf ./node_modules
	rm -rf ./dist

hel%: ## help: Show this help message.
	@echo "usage: make [target] ..."
	@echo ""
	@echo "targets:"
	@grep -Eh '^.+:\ ##\ .+' ${MAKEFILE_LIST} | cut -d ' ' -f '3-' | column -t -s ':'


# vim:ft=make
#
