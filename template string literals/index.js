const information = {
  personal_info: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software Engineer'
  },
  address: '31st, Billionaire street'
}

const { personal_info: { firstName, lastName, age, occupation }, address } = information;

// we want to output all this information in a single string
// we can uses the plus concatenation or the string literals

// The statement we want to output is:
// My name is John Doe. I am 30 years of age. I work as a software Engineer and live at 31st, Billionaire street

// doing it using the plus concatenation
console.log('My name is ' + firstName + ' ' + lastName + '. I am ' + age + ' years of age. I work as a ' + occupation + ' and live at ' + address);

// using template string literals
console.log(`My name is ${firstName} ${lastName}. I am ${age} years of age. I work as a ${occupation} and live at ${address}`)
console.log(`I am ${firstName} ${lastName}`)