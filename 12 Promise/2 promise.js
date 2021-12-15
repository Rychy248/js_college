"use strict"
console.clear()

// FIRST EXAMPLE
let x=10;

const p = new Promise((resolve,reject)=>{
    if(x===11){
        resolve(`La variable es igual a ${x}`);
    }else{
        reject(`La variable no es igual a 10`);
    };
});

p
.then(res=>{
    console.log(res);
})
.catch(error=>{
    console.log(error);
});
