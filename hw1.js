/*
    Author: Nathan Ngo
    Date Created: 2024-06-01
    Date Last Modified: 2024-06-01
    Version: 1.0
    Description: Homework 1 JavaScript file
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {
    output.innerHTML = this.value;
};