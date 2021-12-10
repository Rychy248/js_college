console.clear();

class Person{
    // constructor(){}; in js
    //in python it's like
    // def __init__(self):
    //      pass
    constructor(name,last_name){
        this.name = name;
        this.last_name = last_name;
        this.full_name = (function(){
            return `${this.name} ${this.last_name}`;
        });
    };

};

let person1 = new Person("Rychy","Hernandez");
let person2 = new Person("Rodrigo","Rodriguez");
console.log(
    `person1 = ${JSON.stringify(person1)}`+
    `\nperson2 = ${JSON.stringify(person2)}`+
    `\nperson1.full_name() = ${person1.full_name()}`+
    `\nperson2.full_name() = ${person2.full_name()}`
);

// using methos set and get y clases of js
// for that the recomendation is, write "_" before the atribute name
// and in set and get write the atribute name without the "_"

class Car{
    constructor(marc,model,cost,color="black"){
        this._color = color;
        this._marc = marc;
        this._model = model;
        this._cost = cost;
    };

    get color(){
        return this._color;
    };
    set color(color){
        this._color=color.toUpperCase;
    };
    get marc(){
        return this._marc;
    };
    set marc(marc){
        this._marc=color.toUpperCase;
    };
    get model(){
        return this._model;
    };
    set model(model){
        this._model=color.toUpperCase;
    };
    get cost(){
        return this._cost;
    };
    set cost(cost){
        this._cost=color.toUpperCase;
    };
};

let lambo = new Car("lamborgini","2021","$12,112");
let ferrari = new Car("Ferrary","2022","$343,112","Blue");
console.log(
    `lambo = ${JSON.stringify(lambo)}`+
    `ferrari = ${JSON.stringify(ferrari)}`
);