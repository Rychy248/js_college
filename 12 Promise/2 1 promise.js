"use strict"
console.clear()

// SECOND EXAMPLE IT'S ONT WORK GOOD, BACAUSE STEP 3 IS EXCEUTED BEFORE THE 2
// let y=10;
// console.log("1. Process initialized...");
// setTimeout(()=>{
//     y = y * 3 + 2;
//     console.log("2. Proces finished...");
// },2000);
// console.log("Result: y="+y);
// SOLUTION promise function

let y=10;

const p2 = new Promise((resolve,reject)=>{
    console.log("1. Process initialized..."); 
    setTimeout(()=>{
        y = y * 3 + 2;
        console.log("2. Proces finished...");
        resolve(y);
    },2000); 
});

p2
.then((res)=>{console.log("Result: y="+res);})
.catch((err)=>{console.log("An error it's ocurred\n"+err);});
