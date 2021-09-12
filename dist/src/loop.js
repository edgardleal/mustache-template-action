"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * split.ts
 * Copyright (C) 2021 edgardleal
 *
 * Distributed under terms of the MIT license.
 */
function split(...params) {
    const options = params.length === 3 ? params[2] : params[1];
    const delimiter = params.length === 3 ? params[1] : ',';
    const input = params[0];
    return input
        .split(delimiter)
        .map((item) => options.fn(item))
        .join('');
}
exports.default = split;
