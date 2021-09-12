/**
 * eq.test.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
import eq from '../eq';

describe('eq', () => {
  it('"a" and "a" should return true', async () => {
    [
      ['a', 'a', true],
      ['a', 'b', false],
      [null, 'b', false],
      [null, null, true],
    ].map(([a, b, r]) => eq(a as any, b as any) === r)
      .map((r) => expect(r).toBeTruthy());
  });
});
