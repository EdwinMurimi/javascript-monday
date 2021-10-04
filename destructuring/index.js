const information = {
  personal_info: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software Engineer'
  },
  address: '31st, Billionaire street'
}

const favourites = {
  books: ['Rich Dad, Poor Dad', 'How the mighty fall', 'Thinking and growing rich']
}

// destructuring

// single level destructuring
const { personal_info, address } = information;

console.log(personal_info);
console.log(address);


// multi-level destructuring
const { personal_info: { firstName, age, occupation } } = information;

console.log(firstName);
console.log(age);
console.log(occupation);

// destructuring the favourites object
const { books } = favourites;

const { books: [a, b, ...c] } = favourites;

console.log(books);
console.log(a);

const thingsILikeToDo = [
  { game: 'Squid Game' },
  { food: ['peproni pizza', 'beer', 'KFC chicken'] }
]

const [ w, { food: [x, y, z] } ] = thingsILikeToDo;

console.log(z);

const [ i, { food: [j, ...k] } ] = thingsILikeToDo;

console.log(k);
