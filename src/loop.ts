/**
 * split.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
export default function split(...params: any[]): string {
  const options: any = params.length === 3 ? params[2] : params[1];
  const delimiter = params.length === 3 ? params[1] : ',';
  const input: string = params[0] as string;
  return input
    .split(delimiter)
    .map((item) => options.fn(item))
    .join('');
}
