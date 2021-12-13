"use strict"
console.clear();

/*
CALLBACK FUNCTION

it's a function who was passed to another function, que llama de vuelta a otra function

The CALLBACK FUNCTION'S target is work in asyncron way
*/


function normalFunctio1(){
    console.log("Hi there i'm the normal function 1 (function declaration)!\n")
};

function normalFunctio2(){
    console.log("Hi there i'm the normal function 2 (function declaration)!\n")
};

// Secuencial procedure ejecution
normalFunctio1();
normalFunctio2();


function printMsg(msg){
    console.log(`\nMessage recived is:\n${msg}`);
};

function add(a,b,functionCallback){
    const msg = `${a} + ${b} = ${a+b}`;
    functionCallback(msg);
};

add(23,34,printMsg);