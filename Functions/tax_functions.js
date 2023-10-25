"use strict";

function getSocSecTax(){
return socialSecurityTax;
}
let grossPay = 1000;
let socialSecurityTaxRate = 6.2/100;
let socialSecurityTax = grossPay * socialSecurityTaxRate;

console.log(`SS Tax on ${grossPay.toFixed(2)} is ${socialSecurityTax.toFixed(2)}`);

getSocSecTax();

function getMedicareTax(){
return medicareTax;
}

let grossPay7 = 2000;
let medicareTaxRate = 1.45/100;
let medicareTax = grossPay7 * medicareTaxRate;
console.log(`Medicare Tax on ${grossPay7.toFixed(2)} is ${medicareTax.toFixed(2)}`);

getMedicareTax();



function getFederalTax(grossPay, withholdingCode){
    let tax;
    if (withholdingCode == 0) {
        tax = 0.23;  
    } else if (withholdingCode == 1) { 
        tax = 0.21;
    } else if (withholdingCode == 2) {
        tax = 0.195;
    } else if (withholdingCode == 3) {
        tax = 0.185;
    } else if (withholdingCode >= 4) {
        tax = .18 - .005 * 2;
    }
    else {tax = 0;}
    const federalTaxWithholding = grossPay * tax;
    return federalTaxWithholding;
}


let grossPay1 = 750;
let withholdingCode1 = 0;
let result1 = getFederalTax(grossPay1, withholdingCode1);

let grossPay2 = 1550;
let withholdingCode2 = 2;
let result2 = getFederalTax(grossPay2, withholdingCode2);

let grossPay3 = 1100;
let withholdingCode3 = 6;
let result3 = getFederalTax(grossPay3, withholdingCode3);
//output

console.log("Person 1:");
console.log(`Gross pay: ${grossPay1}`);
console.log(`Withholding code: ${withholdingCode1}`);
console.log(`Federal tax withholding: ${result1}`);

console.log("Person 2:");
console.log(`Gross pay: ${grossPay2}`);
console.log(`Withholding code: ${withholdingCode2}`);
console.log(`Federal tax withholding: ${result2}`);

console.log("Person 3:");
console.log(`Gross pay: ${grossPay3}`)
console.log(`Withholding code: ${withholdingCode3}`);
console.log(`Federal tax withholding: ${result3.toFixed(2)}`);

//function getFederalTax(){
 //   return getFederalTaxWithholding;
//}


getFederalTax();