// 'find' give first element an it will be only number not array
const numbers = [12, 5, 23, 11, 56, 85, 65, 1];

const fives = numbers.find(num => num % 5 === 0);
console.log(fives);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 25000},
    {id: 1, name: 'tablet', price: 95000}
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);
