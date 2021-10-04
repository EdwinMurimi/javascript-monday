// const versus let versus var

// always use const in declaring your variables unless your sure your variables will change
const PAY_RATE = 0.6;
const KSHS_TO_USD = 110;
const TAX = 0.3; //equivalent to 30%

// console.log(PAY_RATE);

// now let us see where let is applicable
let age = 11;
let nth_day_of_coding = 21;

// console.log(age);


// var is not a good variable declaration to use reason being it is globally scoped
// I'll explain this in a few minutes


// now let us look at some cool things.
let ages_of_people = [56, 10, 86, 30, 27];

// DO THE EXPLANATION HERE...
ages_of_people[2] = 37;

// console.log(ages_of_people);

// DO MORE EXPLANATION HERE...
ages_of_people = 21;

// console.log(ages_of_people);

const people_info = {
  personal_info: {
    name: 'John Doe',
    age: 30,
    occupation: 'programmer',
    companies_worked: ['Google', 'theJitu', 'THH-LLC', 'Griffin solutions group']
  },
  number_of_cars_owned: 4
}

// DO THE EXPLANATION HERE...
people_info.personal_info.age = 31;

// console.log(people_info);




// Now let's go back to our var declaration.
function printName() {
  var name = 'John';

  if (name === 'John') {
    var name = 'Doe'
  }

  return name;
}

console.log(printName())








function printNameOne() {
  let name = 'John';

  if (name === 'John') {
    let name = 'Doe'
    // return name;
  }

  return name
}

console.log(printNameOne())
