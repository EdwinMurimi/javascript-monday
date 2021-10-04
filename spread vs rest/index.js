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

// let's first talk about spread
// just as the name suggests it spreads out the
const new_object = { favourites, ...information };
const new_object_one = { ...favourites, information };

console.log(new_object);
// console.log('\nNew object')
// console.log(new_object_one);

// spread operator in arrays
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [91, 92, 93, 94, 95, 96];

const combined_array = [...array2, ...array1];

// console.log(combined_array);

// [1, 2, 3, 4, 5, 6, [91, 92, 93, 94, 95, 96]]

// const array_of_array = [1, 2, [91, 92, 93, 94, 95, 96]];

// const [p, q, ...r] = array_of_array;

// console.log(p, q);


// rest operator
// console.log(favourites.books);
const [ a, b, ...c ] = favourites.books;

// console.log(a);
// console.log(b);
// console.log(c);


// rest operator in objects
const a_simple_object = {
  name: 'John Doe',
  age: 30,
  hobbies: ['Movies', 'car racing', 'gnambu', 'green light, red light'],
  number_of_friends: 40
}

const {name, number_of_friends, ...g} = a_simple_object;

// console.log(g);