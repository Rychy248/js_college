"use strict"
console.clear();

let clock = ()=>{
    let today = new Date();
    console.clear();
    console.log(`Currently Time ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
};
setInterval(clock, 1000);