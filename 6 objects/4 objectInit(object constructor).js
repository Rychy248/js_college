console.clear();

let person1={
    name:"Karly",
    last_name:"Up",
    get full_name (){
        return `${this.name} ${this.last_name}`
    },
    language: "es_GMT",
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase()
    }
};

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
printObj("person1",person1);

console.log("Objects in js are similar a class in other languagues, that's wy"+
    "\nan object can have funtions, and properties!, so if we want an object like a class"+
    "\nwe need to use a function declaration, how become:"+
    "\nfunction person(name, last_name, language){"+
    "\n    this.name = name;"+
    "\n    this.last_name = last_name;"+
    "\n    this.language = language;"+
    "\n}\n"+
    "\nWhat's the benefit of this, it's an object like a class\n"
);

function person(name, last_name, language){
    this.name = name;
    this.last_name = last_name;
    this.language = language;
    this.full_name = function (){
        return `${this.name} ${this.last_name}`;
    };
};

let person2 = new person("Karly","Up","en");
printObj("person2",person2);
let person3 = new person("Joe","Hernández","es_es");
printObj("person3",person3);


