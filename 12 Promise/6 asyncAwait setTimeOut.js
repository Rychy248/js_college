"use strict"
console.clear();

async function asyncAwaitPromiseFunction(){
    let flag = new Promise(resolve=>{
        setTimeout(()=>{resolve(true)},3000);
    });

    let myPromise = new Promise(resolve=>{
        setTimeout(()=>{
            resolve("My promise with await and setTimeout!\n");
        },3000);
    });

    console.log(await myPromise); // fuck shit it's not work for me! :(
    console.log("Middel of function;")
    if (await flag) {
        console.log(await myPromise);
    }
    console.log("Function end;")
};

asyncAwaitPromiseFunction();


