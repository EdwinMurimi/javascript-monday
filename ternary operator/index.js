const user = { 
  name: 'Alex',
  address: '15th Park Avenue',
  age: 43
}
const { name, age, salary=123455 } = user;

console.log(name, age, salary); // Output, Alex 43 123455

// speak about ternary operators here.
// let salary = user.salary ? user.salary : 123455;