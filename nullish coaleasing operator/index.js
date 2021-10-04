/*
* The nullish coalescing operator (??) is a logical operator that returns its right-hand 
* side operand when its left-hand side operand is null or undefined, and otherwise returns 
* its left-hand side operand.
*/

const foo = null ?? 'default string';
// console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
// console.log(baz);
// expected output: 0


const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42