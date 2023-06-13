// Practice Problem map(), filter(), find()
/*01 - You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.
*/
// 01- solve - map(),
// Uding for loop
const oddArray = [1,3, 5, 7, 9];
const evenArray = [];
for(let i = 0; i < oddArray.length; i++){
    const even = oddArray[i];
    const evenNumbers = even + 1;
    evenArray.push(evenNumbers);
}
// console.log(evenArray);

// 01 - using array.map and arrow function
const evenArray2 = oddArray.map(num => num + 1);
// console.log(evenArray2);



/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
// 02 - solve - filter()
const divisibleArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleFilter = divisibleArray.filter(num => num  % 10 === 0);
// console.log(divisibleFilter);

/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
// 03 - solve - find()
const divisibleFind = divisibleArray.find(num => num % 10 === 0);
console.log(divisibleFind);



