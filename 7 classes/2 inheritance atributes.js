class Animal{
    constructor(sound,habitad,legs,skin){
        this._legs = legs;
        this._sound = sound;
        this._skin = skin;
        this._habitad = habitad;
    };
    get legs(){
        return this._legs;
    };
    set legs(legs){
        this._legs = legs;
    };
    get sound(){
        return this._sound;
    };
    set sound(sound){
        this._sound = sound;
    };
    get skin(){
        return this._skin;
    };
    set skin(skin){
        this._skin = skin;
    };
    get habitad(){
        return this._habitad;
    };
    set habitad(habitad){
        this._habitad = habitad;
    };
};

console.clear();
console.log(
    "For inheritance from a clase we use de keyword 'extends'\n")+
    "'class son_class extends father_class{'"
    ;
class Bird extends Animal{
    constructor(sound,habitad,name,flight){
        super(sound,habitad,"2","plume"); //calling the constructor of the father class
        this._name = name;
        this._flight = flight;
    }
    get name(){
        return this._name;
    };
    set name(name){
        this._name=name;
    };
    get flight(){
        return this._flight;
    };
    set flight(flight){
        this._flight=flight;
    };
};

let duck = new Bird("Cuack","Water","Duck",false);
let chiken = new Bird("Ka ka ra ka","Farms","Chiken",false);
let hawk = new Bird("Kiiiiiiii","Wild","Hawk",true);

console.log(
    `duck: name=${duck.name}, sound=${duck.sound}, flight=${duck.flight}`+
    `\nchiken: name=${chiken.name}, sound=${chiken.sound}, flight=${chiken.flight}`+
    `\nhawk: name=${hawk.name}, sound=${hawk.sound}, flight=${hawk.flight}`
);