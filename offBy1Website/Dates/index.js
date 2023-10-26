"use strict";

window.onload = init;

function init(){
    const button = document.getElementById("button");
    button.onclick = onButtonClicked;
}


function onButtonClicked(){
    const inputDate = document.getElementById("inputDate").value;
    let objectDate = Date(inputDate);
    let date = objectDate.toString();

    // display
    let outputDisplay = document.getElementById("outputDisplay");
    outputDisplay.innerHTML = date;
}
