// "use strict"

/*
"use strict" este string debe usarse al inicio de cada archivo js
obliga la declaración de variables antes de utilizarlas.

*/

try {
    x = 19;
    console.log("X: "+19);
} catch (ReferenceError) {
    console.log("x = 19; Raise an ReferenceError");
}




/* 
TAMBIEN PUEDE USARSE EN VEZ DE ESE STRING, UNA FUNCTION
*/
function myFunction(i){
    "Use Stric"
    let counter;
    if (typeof(i)==="number"){
        counter=--i;
    }else{
        counter=5;
    };

    try {
        x = 19;
    } catch (ReferenceError) {
        console.log("x = 19; Raise an ReferenceError\nRecursive counter:"+counter);
        if(counter>0){
            myFunction(counter);
        };
    }
};

myFunction();

/*
function loop(my_list=[],i=false){
    if (i){
        my_list.push(i);
    }else{
        i = 10;
    };
    
    i--;
    
    if (i >0){
        loop(my_list,i)
    };
    
    return my_list;
};

function end(){
    return ("By BYe");
};

console.log(
        loop()
    );
console.log
        (end()
    );
*/