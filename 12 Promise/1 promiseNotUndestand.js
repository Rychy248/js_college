"use strict"
// console.clear(); 
process.stdout.write('\x1Bc');  // on windows preferible


let myPromise = new Promise((resolved, reject)=>{
    let expression = false;  // answer simulation
    
    if (expression){
        resolved("Proces was succes!");
    }else{
        reject("An error was ocurred!");
    };
});

myPromise
    .then(
        value =>{console.log(value);},//Filling first paramter         |resolved
        error =>{console.log(error);}//Filling second parameter        |reject
    );
myPromise
.then(
    value =>{console.log(value);})
.catch(
    error =>{console.log(error);});

// IN ONE LINE
// myPromise.then(value=>{console.log(value);},error=>{console.log(error);})