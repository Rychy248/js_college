"use strict"
console.clear();

// asynchronous calls with CALLBACK Functions and SETtimeOUT.

function myCallBackFunction(){
    console.log("First Asynchronous Greeting after 4 seconds!");
};

// function declaration
setTimeout(myCallBackFunction,4000); //(function,miliseconds)
// function expression
setTimeout(function(){console.log("Second Asynchronous Greeting after 2 seconds!")},2000);
// Arrow function
setTimeout(()=>console.log("Third Asynchronous Greeting after 3 seconds!"),3000);

console.log("I'm waiting for answers of my calls")
