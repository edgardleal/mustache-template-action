/**
 * index.ts
 *
 * @module index.ts
 */
import core from '@actions/core';
import github from '@actions/github';
import handlebars from 'handlebars';
import fs from 'fs';

(async () => {
  try {
    const start = Date.now();
    const template = core.getInput('input');
    const debug = core.getInput('debug') === 'true';
    const templateContent = fs.readFileSync(template, 'utf8');
    const compiledTemplate = handlebars.compile(templateContent);

    const parsedContent = compiledTemplate({
      now: new Date(),
      context: github.context,
      ...process.env,
    });

    if (debug) {
      console.log(parsedContent); // eslint-disable-line
    }

    fs.writeFileSync(parsedContent, 'utf8');

    core.setOutput('time', Date.now() - start);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
