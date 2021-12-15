"use strict"
console.clear()
// let myPromise = new Promise((resolve,reject)=>{ 
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


let f4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("3 seconds pased f4");
    },3000); 
});
let f3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3 seconds pased f3");
        resolve(f4);
    },3000); 
});
let f2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3 seconds pased f2");
        resolve(f3);
    },3000); 
});

let f1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("3 seconds pased f1");
        resolve(f2);
    },3000); 
});

f4
.then(res=>{return res})
.then(res=>{return res})
.then(res=>{console.log(res);});