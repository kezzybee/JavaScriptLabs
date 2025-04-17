"use strict";

alert("External");

document.getElementById("addBtn").addEventListener("click", function () {
    const newP = document.createElement("p");
    const txt = document.getElementById("txtInput");

    newP.textContent = txt.value;
    document.getElementById("output").appendChild(newP);
    txt.value = "";
    txt.focus();
});

// All 3 of these are creating a variable (declaring)
var a = 12; // old and busted
a = 31; // reassigning the value to 'a'

let b = 37; // new and cool
b = 15;

const c = 42; // new and constant
// c = 45; cannot 'reassign' a constant

let a2 = 232;
// let 2a = 34234; variables can't start with a number

// camelCase -> capitalise the first letter of every word BUT the first
let myVeryLongVariableNameAsAnExampleForTheLearners = "yo";

const PI = 3.1415;

const MY_CONSTANT_EXAMPLE_FOR_JOHN = "HFBGJGHD";

const name = "gndfjg";
// const name = "gdfgdg"; can't have two variables of the same name in the same 'block'

let z = 4654;


const firstName = "Jordan";
const lastName = 'Harrison';

const fullName = firstName + " " + lastName; // 'concatenation' adds multiple strings together to make one big string


const fullNameInterpolated = `${firstName} ${lastName}`;


console.log("Where is J in jordan:", "jordan".indexOf("j"));

console.log("What character is at position 0 in jordan:", "jordan".charAt(0));


console.log("Jordan in caps:", firstName.toUpperCase());

// can't refer back to a value later unless you store it in a variable
const firstNameUpper = firstName.toUpperCase();

console.log("firstNameUpper:", firstNameUpper);
