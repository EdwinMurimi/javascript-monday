/*
*
*
*
*/

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

let object = {};
object.property = 1;

console.log(object);


// good practice: I'll explain why
// not applicable everywhere
// will give scenarios where it is applicable
let object1 = {};
object?.property = 1;

console.log(object1);


// combining optional chaining operator with nullish coalesing operator
let customer = {
  name: "Carl",
  details: { age: 82 }
};

const customerCity = customer?.city ?? "Unknown city";

console.log(customerCity); // Unknown city
