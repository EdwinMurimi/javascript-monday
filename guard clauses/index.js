// I'll explain this using a game called fizz buzz.

/*
* In this game, you have to check for a couple of checks
* You first have to check if a number is divisible by 3
* If that is true you print the word fizz
* Next, you have to check if the number is divisible by 5
* If that is true you print the word buzz
* Next, if a number is both divisible by 3 and 5
* You print the word fizz buzz.
* Finally, if a number is not divisible by both 3 and 5 you print the number
*/

// we will loop through the numbers between 0 to 100.
function fizzbuzz(i) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      return 'fizz buzz';
    } else {
      return 'fizz';
    }
  } else {
    if (i % 5 === 0) {
      return 'buzz';
    } else {
      return i;
    }
  }
}

console.log('The first function begins here...');

for(let i = 0; i <= 15; i++) {
  console.log(fizzbuzz(i));
}


// using guard clauses is a better way.
function fizzbuzztwo(i) {
  if(i % 3 === 0 && i % 5 === 0) return 'fizz buzz';
  if(i % 3 === 0) return 'fizz';
  if(i % 5 === 0) return 'buzz';
  return i;
}

console.log('The next function begins here...');

for(let i = 0; i <= 15; i++) {
  console.log(fizzbuzztwo(i));
}