const numbers = [12, 5, 23, 11, 56, 85, 65, 1];
const bigNum = numbers.filter(number => number > 20);
// console.log(bigNum);
const tiny = numbers.filter(n => n < 10);
// console.log(tiny);
const even = numbers.filter(e =>  e % 2 === 0);
// console.log(even);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'mobile', price: 35000},
    {id: 1, name: 'watch', price: 25000},
    {id: 1, name: 'tablet', price: 95000}
];

const expensive = products.filter(product => product.price > 50000);
console.log(expensive);