"use strict"
console.clear();

async function asyncAwaitFunction(){
    let myPromise = new Promise((resolve,reject)=>{
        resolve("Function with promise and Await");
    });
    console.log( await myPromise);
};

asyncAwaitFunction()