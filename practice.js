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
// console.log(divisibleFind);



// Practice Problem reduce()
/*
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const reduceArray = [1, 9, 17, 22];
// 01-solve-fot loop
let reduceSum1 = 0;
for(let i = 0; i < reduceArray.length; i++){
    reduceSum1 += reduceArray[i];
}
// console.log(reduceSum1);
// 01-solve-reduce()
const reduceSum = reduceArray.reduce((sum, num) => sum + num);
// console.log(reduceSum);

// another -01
/*
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/
// using for loop
const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'suchotita', age: 22}
];
let ageSum = 0;
for(let i = 0; i < people.length; i++){
    ageSum += people[i].age;
}
// console.log(ageSum);
// using array.reduce()
const ageSum1 = people.reduce((accoumulator, person) => accoumulator + person.age, 0);
// console.log(ageSum1);


// Practice Problem: Access Object values
const student = {
    name: 'Fredie',
    age: 26,
}
// console.log(student.age);

// another
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderbad',
            country: 'India'
        }
    ]
};
// console.log(data.location[0].city);

// Another
/*
Challenging
● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company
name
*/
const user ={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };
// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.geo.lat);
console.log(user.company.name);


