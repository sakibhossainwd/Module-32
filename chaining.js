const users = [ {id: 01, name: 'sakib', job: 'Developer'} ];

// console.log(users[0].name);


const date = {
    coun: 500,
    data: [
        {id: 01, name: 'sakib', job: 'Developer'},
        {id: 02, name: 'Hossain', job: 'Lecturer'},
    ]
};
// console.log(date.data[1].job);

const user = {
    id: 101,
    name: 'Sakib Hossain',
    address: {
        street: {
            first: '35/A dowlotput',
            second: 'fourt floor',
            third: 'right side'
        },
        postOffice: 'Kotbari',
        city: 'Cumilla'
    }
}
// right
console.log(user.address.street.third);
// wrong
console.log(user.address.stree?.third);
/* '?' is there use for if this value is not exist so stop here
and it will show undefind. */
