"use strict";
// *********datatypes******* 
// let a:String="25";
// let nambo:number=123;
// let check:boolean=true;
// console.log(check);
const users = [
    { name: "name1", age: 12 },
    { name: "name2", age: 13 },
    { name: "name3", age: 14 },
    { name: "name4", age: 15 }
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "name1");
const filteredPeopleByAge = filterByPeoples(users, "age", 15);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
