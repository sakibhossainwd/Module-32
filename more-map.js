const numbers = [12, 58, 84, 96];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Salman'];
const firstLetters = friends.map(friend => friend[2]);
// console.log(firstLetters);
const nameLength = friends.map(friend => friend.length);
// console.log(nameLength);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 25000},
    {id: 1, name: 'tablet', price: 95000}
];

const items = products.map(product => product.name);
// console.log(items);
const prices = products.map(p => p.price);
// console.log(prices);

const numbers2 = [1, 2, 3, 4, 5];
const getsum = numbers2.map(num => num + 1);
console.log(getsum);