"use strict";


function getSupplier (partCode){
  let posOfColon = partCode.indexOf(":");
  let productSupplier = partCode.substring(0, posOfColon);
console.log(`Supplier is ${productSupplier}`);
}

function getProductNumber (partCode){
    let posOfDash = partCode.indexOf("-");
    let productNumber = partCode.substring( partCode.indexOf(":") + 1, posOfDash);
    console.log(`Number is ${productNumber}`);
}
function getSize(partCode) {
let size = partCode.substring(partCode.indexOf("-") + 1);
console.log(`Size is ${size}`);

}
//
 getSupplier("DI:12345-M" );
getProductNumber("DI:12345-M" );
getSize("DI:12345-M" );