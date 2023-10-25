"use strict";


//let name = "Brenda Kaye";

function parseAndDisplayName(name){
    let positionOfSpace = name.indexOf(" ");
    //if (space !==-1) {
        let firstName = name.substring(0, positionOfSpace);
        let lastName = name.substring(positionOfSpace + 1);
        console.log(`Name is ${name}`);
        console.log(`First name is ${firstName}`);
        console.log(`Last name is ${lastName}`);


    }
    parseAndDisplayName("Brenda Kaye");
    parseAndDisplayName("Ian Auston");
    parseAndDisplayName("Siddalee Grace");


