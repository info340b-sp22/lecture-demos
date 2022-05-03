'use strict';
const data = {value: "other"};

/*** my-module.js ***/
export function foo() { return 'foo'; } //named export

export const bar = "bar"; //export a variable

//will not be available (a "private" function)
function baz() { return 'baz'; }