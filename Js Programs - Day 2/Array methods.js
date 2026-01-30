// Array Methods:
// map() - Changes each item (like doubling numbers or making text uppercase)
// filter() - Keeps only items you want (like adults only or big numbers)
// reduce() - Combines everything into one value (like adding prices together)



const numbers = [1, 2, 3, 4, 5];

// 1. MAP - Transform each item
// "Multiply each number by 2"
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const names = ["alice", "bob", "charlie"];
const uppercase = names.map((name) => name.toUpperCase());
console.log(uppercase); // ["ALICE", "BOB", "CHARLIE"]


// 2. FILTER - Keep only items that match condition
// "Keep only numbers greater than 3"
const bigNumbers = numbers.filter((num) => num > 3);
console.log(bigNumbers); // [4, 5]

const ages = [12, 18, 25, 16, 30];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [18, 25, 30]


// 3. REDUCE - Combine all items into one value
// "Add all numbers together"
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15 (because 1+2+3+4+5 = 15)

const prices = [10, 20, 30];
const totalPrice = prices.reduce((total, price) => total + price, 0);
console.log(totalPrice); // 60
