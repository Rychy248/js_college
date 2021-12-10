console.clear();

function printObj(objectName,object){
    for (key of Object.keys(object)){
        console.log(
            typeof(object[key]) === "function"?
            `${objectName}[${key}]() = ${object[key]()}`:
            `${objectName}[${key}] = ${object[key]}`
        );
    };
    console.log("");
};

// construct "function", or a simulation of a class under my view
function Person(name, last_name, language){
    this.name = name;
    this.last_name = last_name;
    this.language = language;
    this.full_name = function (){
        return `${this.name} ${this.last_name}`;
    };
};

let person2 = new Person("Karly","Up","en");
printObj("person2",person2);
let person3 = new Person("Joe","Hernández","es_es");
printObj("person3",person3);


Person.prototype.phone_number= "default content";

console.log(
    "For add methods of our construct function we can do it, out of the initial declaration"+
    "\nfor do that, use keyword 'prototype':"+
    `\nPerson.prototype.phone_number= "default content";`+
    `\nperson2.phone_number = ${person2.phone_number}`+
    `\nperson3.phone_number = ${person3.phone_number}`
);
