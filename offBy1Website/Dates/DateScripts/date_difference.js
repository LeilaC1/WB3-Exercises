"use strict";

let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

// write a code to get and display 

let date1 = new Date(startDate);
let date2 = new Date(endDate);
let time = Math.abs(date2 - date1);
let days = Math.ceil(time / (1000 * 60 * 60 * 24));

console.log(`Start Date = ${date1}`);
console.log(`End Date = ${date2}`);
console.log(`Day Difference = ${days} days`);


