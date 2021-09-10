"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index.ts
 *
 * @module index.ts
 */
const core_1 = __importDefault(require("@actions/core"));
const github_1 = __importDefault(require("@actions/github"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const start = Date.now();
        const template = core_1.default.getInput('input');
        const debug = core_1.default.getInput('debug') === 'true';
        const templateContent = fs_1.default.readFileSync(template, 'utf8');
        const compiledTemplate = handlebars_1.default.compile(templateContent);
        const parsedContent = compiledTemplate(Object.assign({ now: new Date(), context: github_1.default.context }, process.env));
        if (debug) {
            console.log(parsedContent); // eslint-disable-line
        }
        fs_1.default.writeFileSync(parsedContent, 'utf8');
        core_1.default.setOutput('time', Date.now() - start);
    }
    catch (error) {
        core_1.default.setFailed(error.message);
    }
}))();
