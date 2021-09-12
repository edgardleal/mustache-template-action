"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * parser.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
const handlebars_1 = require("handlebars");
const github_1 = require("@actions/github");
const eq_1 = __importDefault(require("./eq"));
const neq_1 = __importDefault(require("./neq"));
const loop_1 = __importDefault(require("./loop"));
handlebars_1.registerHelper('eq', eq_1.default);
handlebars_1.registerHelper('neq', neq_1.default);
handlebars_1.registerHelper('loop', loop_1.default);
function parse(template) {
    const compiledTemplate = handlebars_1.compile(template);
    const parsedContent = compiledTemplate(Object.assign({ now: new Date(), context: github_1.context }, process.env));
    return parsedContent;
}
exports.default = parse;
