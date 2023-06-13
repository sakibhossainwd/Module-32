// make array every number double using (for of)
// const numbers = [1, 2, 3, 4, 5];
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

// double useing function and for of
const numbers = [1, 2, 3, 4, 5];
function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        // const doubled = number * 2;
        // const doubled = doubleItOld(number);
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// regular function
// function doubleItOld(numbers){
//     return number * 2;
// }

// arrow function
const doubleIt = num => num * 2;

const result = getDoubles(numbers);
// console.log(result);

const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);
const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDouble2);


// full map function is here
const fiveTimes = [2, 4, 6, 8, 10].map(x => x * 2); 
console.log(fiveTimes);
/*
Purpose:
1. get an array
2. for every element of the array do something
3. store the result in an array
4. return the result array
*/

