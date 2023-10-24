"use trict";



function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state},  ${zip} `)
}
displayMailingLabel("Cookie Monster", "123 Sesame Street", "New York", "NY", "10023");
displayMailingLabel("Elmo", "123 Sesame Street", "New York", "NY", "10023");


function addNumbers(num1, num2) {
    let results = (num1 + num2);
    console.log(num1 + " + " + num2 + " = " + results);
}


addNumbers(3, 4);
addNumbers(2, 3);




function displayReceipts(totalDue, amountPaid) {
let changeDue = (amountPaid - totalDue);

    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change Due: $" + changeDue);
}
displayReceipts(15, 20);
displayReceipts(130, 150);
displayReceipts(7, 10);