// ES5 functions
function funcName() {
  console.log('Hello world');
}

funcName();

// ES6 functions
const funcNameOne = () => {
  console.log('Hello world');
}

funcNameOne();

// good hack down here...

/*
* If your function returns one statement
* there is no need for the curly braces that wrap up the body
* BUT, this is only possible for fat arrow functions or what we call ES6 functions
*/

// example
const addTwoNumbers = (a, b) => a + b;

console.log(addTwoNumbers(10, 5));

/*
* If your function has one parameter
* there is no need for the brackets that wrap up the parameter list
* BUT, this is only possible for fat arrow functions or what we call ES6 functions
*/

// example
const getAge = age => `Your age is ${age}`;

console.log(getAge(10));