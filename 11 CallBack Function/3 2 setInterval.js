"use strict"
console.clear();

// setInterval in js it's like setTimeOut
// setInterval call the argument function in a loop form
// setTimeOut call the argument function after a preterdemited time
function myFunction(i){
    return `\n[${i}]Hi there i'm a synchronous function (Or someone turned me into it!)`;
}

let clock = (_msg)=>{
    let today = new Date();
    console.clear();
    console.log(
        `Currently Time ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`+
        `\n${_msg}`
        );
};
            // setInterval(clock, 1000);
let j=0,
    i=0,
    msg="";

setInterval(()=>{
    (j===3)
        ?(j=0, msg+=myFunction(i++))
        :j++;
    clock(msg);
}, 1000);

// if (j===3){
//     j=0;
//     msg+=myFunction(i++);
// }else{
//     j++;
// };

