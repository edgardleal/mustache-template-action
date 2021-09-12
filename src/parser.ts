/**
 * parser.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
import { compile, registerHelper } from 'handlebars';
import { context } from '@actions/github';

import eq from './eq';
import neq from './neq';
import loop from './loop';

registerHelper('eq', eq);
registerHelper('neq', neq);
registerHelper('loop', loop);

export default function parse(template: string): string {
  const compiledTemplate = compile(template);

  const parsedContent = compiledTemplate({
    now: new Date(),
    context,
    ...process.env,
  });
  return parsedContent;
}
