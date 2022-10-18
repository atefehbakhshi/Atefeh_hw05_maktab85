'use strict'
let user = [
    {
        name: 'Eli',
        age: 32
    },
    {
        name: 'Mohammad',
        age: 8
    },
    {
        name: 'Reza',
        age: 23
    },
    {
        name: 'Ati',
        age: 25
    },
    {
        name: 'Eli',
        age: 5
    },

];
const sortingByAge = (obj) => {
    const sortedtObject = obj.sort((a, b) => a.age - b.age);
    resultTable(sortedtObject);
}
// display result in html
const resultTable = (obj) => {
    const table = document.createElement('table');

    // the header of result table
    const tableHeaderItems = ['Item', 'Name', 'Age'];
    let headerRow = table.insertRow();
    tableHeaderItems.forEach(item => {
        let headerCell = document.createElement("th");
        headerCell.innerHTML = item;
        headerRow.appendChild(headerCell);
    });

    // the body of result table
    for (let i = 0; i < obj.length; i++) {
        const row = table.insertRow();
        const item = row.insertCell(0)
        const userName = row.insertCell(1)
        const age = row.insertCell(2)
        item.innerHTML = i + 1;
        userName.innerHTML = obj[Object.keys(obj)[i]].name;
        age.innerHTML = obj[Object.keys(obj)[i]].age;
        document.body.appendChild(table)
    }
}

sortingByAge(user);