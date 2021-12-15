"use strict"
console.clear()
//ASYNC especifica que se retorna una promesa


// let myPromise = new Promise((resolve,reject)=>{ 
/*
let myPromise = new Promise((resolve)=>{ //it could be just with resolve
    console.log("Timer initialized")
    setTimeout(()=>{resolve("3 seconds pased");},3000);
    return "Esto nunca se regresa";
});

myPromise
.then(res=>{
    console.log(res);
    console.log("Timer finshed");
});

*/

// async function 
async function myFunctionWithPromise(){
    return "Gretting with promise and async";
};

// myFunctionWithPromise is a normal function (function declaration)
// it's need parentecis '()'

myFunctionWithPromise()
.then(res=>console.log(res));