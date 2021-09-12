/**
 * index.ts
 *
 * @module index.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import { setOutput, getInput, setFailed } from '@actions/core';
import parse from './src/parser';

(async () => {
  try {
    const start = Date.now();
    const template = getInput('input');
    const output = getInput('output');
    const debug = getInput('debug') === 'true';
    const templateContent = readFileSync(template, 'utf8');

    const parsedContent = parse(templateContent);

    if (debug) {
      console.log(parsedContent); // eslint-disable-line
    }

    writeFileSync(output, parsedContent, 'utf8');

    setOutput('time', Date.now() - start);
  } catch (error) {
    console.error('Error: %s', error.message); // eslint-disable-line
    setFailed(error.message);
  }
})();
