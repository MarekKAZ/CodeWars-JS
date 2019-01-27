const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);

const fruitss = ['apple', 'pear', 'cherry'];

const capitalizedFruitss = fruitss.map(fruits => fruits.toLowerCase());

console.log(capitalizedFruitss);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
 
const priceToDollars = dollar => `$${dollar.toFixed(2)}`; // convert number to $ price string with 2 (fixed) point notation.

// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const dollarPrices = prices.map(priceToDollars);

console.log(dollarPrices);

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below
abbrDay = day => day.substr(0,3);
let abbreviatedDays = daysOfWeek.map(abbrDay);
console.log(abbreviatedDays);
