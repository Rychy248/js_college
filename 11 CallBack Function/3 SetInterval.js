"use strict"
console.clear();

// setInterval in js it's like setTimeOut
// setInterval call the argument function in a loop form
// setTimeOut call the argument function after a preterdemited time
function myFunction(_i){
    _i++;
    console.log(`[${i}]Hi there i'm a synchronous function (Or someone turned me into it!)`);
    return _i;
}
let i=0;
setInterval((_i=i)=>{i=myFunction(_i)}, 4000);
