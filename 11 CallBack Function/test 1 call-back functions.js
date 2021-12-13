"use strict"
console.clear();

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

function add(a,b){
    const msg = `${a} + ${b} = ${a+b}`;
    printMsg(msg);
};

add(23,34);