/**
 * index.ts
 *
 * @module index.ts
 */
import { setOutput, getInput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import handlebars from 'handlebars';
import fs from 'fs';

(async () => {
  try {
    const start = Date.now();
    const template = getInput('input');
    const debug = getInput('debug') === 'true';
    const templateContent = fs.readFileSync(template, 'utf8');
    const compiledTemplate = handlebars.compile(templateContent);

    const parsedContent = compiledTemplate({
      now: new Date(),
      context,
      ...process.env,
    });

    if (debug) {
      console.log(parsedContent); // eslint-disable-line
    }

    fs.writeFileSync(parsedContent, 'utf8');

    setOutput('time', Date.now() - start);
  } catch (error) {
    console.error('Error: %s', error.message); // eslint-disable-line
    setFailed(error.message);
  }
})();
