// Incorrect Example

const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);
console.log({
  person,
  newPerson
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/


// Correct Example

const createPersonWithAge = (age, person) => {
  return { ...person, age };  //destructuring object
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);
console.log({
  person,
  newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/
