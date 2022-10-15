'use strict'
let user = [
    {
        name: 'Eli',
        age: 32
    },
    {
        name: 'Reza',
        age: 23
    },
    {
        name: 'Ati',
        age: 25
    },

];
const sortingByAge = (obj) => {
    return obj.sort((a, b) => a.age - b.age)
}
console.log(sortingByAge(user))