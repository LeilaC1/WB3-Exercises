"use strict";

// grabs the current date/time and display it = day-month-year(weekday) use getMonth or getFullYear function -- getDay for weekday array

let currentDate = new Date();

// get month and day
const months = ["January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"];

const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wendnesday",
 "Thursday", "Friday", "Saturday"];

// let day, month, year, weekday

let day = currentDate.getDate();

let weekdayName = weekdayNames[currentDate.getDay()];

let month = months[currentDate.getMonth()];

let year = currentDate.getFullYear();

let format = `${day}-${month}-${year}(${weekdayName})`;

// output

console.log(format);

