/**
 * parse.test.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
import parse from '../parser';

describe('parse', () => {
  it('should replace {{ENV}} for ENV value', () => {
    process.env.ENV = 'dev';
    const result = parse('{{ENV}}');
    expect(result).toBe(process.env.ENV);
  });

  describe('eq in condition', () => {
    it('when eq receive equal values, should be accepted by if', async () => {
      process.env.A = '123';
      process.env.B = '123';
      const template = '{{#if (eq A B)}}OK{{/if}}';
      const result = parse(template);
      expect(result).toBe('OK');
    });
    it('when eq receive different values, should return empty string', async () => {
      process.env.A = '123';
      process.env.B = '1234';
      const template = '{{#if (eq A B)}}OK{{/if}}';
      const result = parse(template);
      expect(result).toBe('');
    });
  });
  describe('neq in condition', () => {
    describe('using template: {{#if (neq A B)}}OK{{/if}}', () => {
      const template = '{{#if (neq A B)}}OK{{/if}}';
      it('when neq receive equal values, should return empty string', async () => {
        process.env.A = '123';
        process.env.B = '123';
        const result = parse(template);
        expect(result).toBe('');
      });
      it('when neq receive different values, should return OK', async () => {
        process.env.A = '123';
        process.env.B = '1234';
        const result = parse(template);
        expect(result).toBe('OK');
      });
    });
  });
  describe('split operation', () => {
    describe('using template: {{#loop A \',\'}}{{this}}{{/loop}}', () => {
      const template = '{{#loop A \',\'}}{{this}}{{/loop}}';
      it('using input "1,2,3" should render "123"', () => {
        process.env.A = '1,2,3';
        const result = parse(template);
        expect(result).toBe('123');
      });
    });
  });
});
