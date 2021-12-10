class Animal{
    constructor(name,sound,habitad){
        this._name = name;
        this._sound = sound;
        this._habitad = habitad;
    };
    get name(){
        return this._name
    };
    set name(name){
        this._name = name;
    };
    get sound(){
        return this._name
    };
    set sound(sound){
        this._sound = sound;
    };
    get habitad(){
        return this._habitad;
    };
    set habitad(habitad){
        this._habitad =habitad;
    };
    makeSound(){
        return `${this._name} said ${this._sound}`;
    };
};

class Terrestrial extends Animal{
    constructor(name,sound){
        super(name,sound,"land");
    };
};
class Acuatic extends Animal{
    constructor(name,sound){
        super(name,sound,"water");
    };
};

let fish = new Acuatic("Fish","Blub Blub"),
    Shark = new Acuatic("Shark","Blub Blub"),
    bear = new Terrestrial("Bear","Guarg Guarg"),
    tiger = new Terrestrial("Tiger","Guarg Guarg")
    ;

console.clear()
console.log(
    `fish: name=${fish.name} habitad=${fish.habitad}\n-----${fish.makeSound()}\n`+
    `Shark: name=${Shark.name} habitad=${Shark.habitad}\n-----${Shark.makeSound()}\n`+
    `bear: name=${bear.name} habitad=${bear.habitad}\n-----${bear.makeSound()}\n`+
    `tiger: name=${tiger.name} habitad=${tiger.habitad}\n-----${tiger.makeSound()}\n`
);

