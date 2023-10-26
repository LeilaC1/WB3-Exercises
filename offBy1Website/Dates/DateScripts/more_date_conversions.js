"use strict";
// that creates date objects for the following important dates in your life. (Improvise if you don't know the actual date) then display each using toLocaleStrings()

// my birthday - mm/dd/yyyy
let myBirthday = new Date('05/27/2005');

// moms birthday - mmm dd yyyy
let momsBirthday = new Date('Jan-13-1980');

// dads birthday - Date (yyyy, m, d)
let dadsBirthday  = new Date ('1974, 1, 14');

console.log(`My Birthday = ${myBirthday.toLocaleString()}`);
console.log(`Moms Birthday = ${momsBirthday.toLocaleString()}`);
console.log(`Dads Birthday = ${dadsBirthday.toLocaleString()}`);