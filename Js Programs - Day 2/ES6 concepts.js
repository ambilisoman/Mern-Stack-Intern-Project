// 1. ARROW FUNCTIONS
// Old way
function greet(name) {
  return "Hello " + name;
}

// New way (Arrow Function)
const greetArrow = (name) => {
  return "Hello " + name;
};

// Even shorter (implicit return)
const greetShort = (name) => "Hello " + name;

console.log(greetShort("John")); // Hello John


// 2. TEMPLATE LITERALS
const name = "Sarah";
const age = 25;

// Old way
const message = "My name is " + name + " and I am " + age + " years old";

// New way (Template Literal)
const messageNew = `My name is ${name} and I am ${age} years old`;

console.log(messageNew);


// 3. DESTRUCTURING
// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // red

// Object Destructuring
const person = { name: "Alex", age: 30, city: "Mumbai" };
const { name: personName, age: personAge } = person;
console.log(personName); // Alex


// 4. SPREAD OPERATOR
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];

// Works with objects too
const user = { name: "Tom", age: 25 };
const updatedUser = { ...user, age: 26 }; //{ name: "Tom", age: 25, age: 26 }; have smae property twice(age) so takes last one ie age:26
console.log(updatedUser); // { name: "Tom", age: 26 }

// Eg:
// const person = { 
//   name: "Sarah", 
//   age: 30, 
//   city: "Mumbai", 
//   job: "Developer" 
// };
// Without spread - you have to type EVERYTHING again: 
// const updated = { 
//   name: "Sarah", 
//   age: 31,  // only this changed!
//   city: "Mumbai", 
//   job: "Developer" 
// };
// With spread: 
// const updated = { ...person, age: 31 };

// Eg:
const profile = { username: "john123", email: "john@email.com", verified: false };
// User just verified their email
const verifiedProfile = { ...profile, verified: true };
console.log(verifiedProfile);
// { username: "john123", email: "john@email.com", verified: true }