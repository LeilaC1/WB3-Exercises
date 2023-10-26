"use strict";


//let name = "Brenda Kaye";

function parseAndDisplayName(name){
    let positionOfSpace = name.indexOf(" ");
    if (positionOfSpace !== name.indexOf(" ")) {
        name = onlyName;
    }
        let firstName = name.substring(0, positionOfSpace);
        let lastName = name.substring(positionOfSpace + 1);
        console.log(`Name is ${name}`);
        console.log(`Only name is ${onlyName}`);

        console.log(`First name is ${firstName}`);
        console.log(`Last name is ${lastName}`);


    }
    parseAndDisplayName("Cher");
    parseAndDisplayName("Brenda Kaye");
    parseAndDisplayName("Dana Lynn Wyatt");


