"use strict"
console.clear();
/*
MORE ABOUT

ARROW FUNCTIONS

*/

function myNormalFunction(){
    //  function declaration
    //  it have hosting
    console.log("Hi there from a Function declaration type!");
};

myNormalFunction();


let ArroyFunction1 = () =>{
    // function arroy, it's an Anonymus function
    // it have not hosting
    console.log("Hi there from an Arroy Function 1 type!");
};

ArroyFunction1();

const ArroyFunction2 = () =>{
    // function arroy, it's an Anonymus function
    // it have not hosting, but const it's the most normal way
    // to define an Arroy function object
    console.log("Hi there from an Second Arroy Function type!");
};

ArroyFunction2();
let ArroyFunctionRedefined = () => console.log("Hi there from an Arroy Function 1 Redefined!");;

const greeting = (name) => `Hi ${name}, i'm talking to you from greeting Function (Arroy Function)`;;
console.log(greeting("Rychy"));

const goodMorning = (name,sir) => "\nGood Morning "+(sir?"Ms.":"Madame")+` ${name}!`;;
console.log(
    goodMorning("Rychy",true),
    goodMorning("Sophia",false)
);

const returnObject = (name,lastName,age) => ({name:name,lastName:lastName,age:age});;
console.log("\nObject: ",returnObject("Rychy","Hernández",21));
console.log("Object: ",returnObject("Sophia","Admunsed",18));

//if the Arrow function have only one parameter, it's could be without paratensis, like the nest arroy funtion
const arrowFunctionStrangeParameter = parameter => `\nArgument sended is ${parameter}`;;
console.log(
    arrowFunctionStrangeParameter("'An Argument to arrowFunctionStrangeParameter'"),
    arrowFunctionStrangeParameter("'An other Argument to arrowFunctionStrangeParameter'")
);


