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
const fs_1 = require("fs");
const core_1 = require("@actions/core");
const parser_1 = __importDefault(require("./src/parser"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const start = Date.now();
        const template = core_1.getInput('input');
        const output = core_1.getInput('output');
        const debug = core_1.getInput('debug') === 'true';
        const templateContent = fs_1.readFileSync(template, 'utf8');
        const parsedContent = parser_1.default(templateContent);
        if (debug) {
            console.log(parsedContent); // eslint-disable-line
        }
        fs_1.writeFileSync(output, parsedContent, 'utf8');
        core_1.setOutput('time', Date.now() - start);
    }
    catch (error) {
        console.error('Error: %s', error.message); // eslint-disable-line
        core_1.setFailed(error.message);
    }
}))();
