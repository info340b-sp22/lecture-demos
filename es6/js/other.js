'use strict';
const data = {value: "other"};

export const peopleArray = [
    { name: 'Ada', height: 64, weight: 135 },
    { name: 'Bob', height: 74, weight: 156, pronoun: 'they/them' },
    { name: 'Chris', height: 69, weight: 139 },
    { name: 'Diya', height: 69, weight: 144 },
    { name: 'Emma', height: 71, weight: 152 }
  ]

/*** my-module.js ***/
export function foo() { return 'foo'; } //named export

export const bar = "hey there"; //export a variable

//will not be available (a "private" function)
function baz() { return 'baz'; }