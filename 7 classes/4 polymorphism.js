console.clear();

class Vehicle{
    turnOn(){
        return "Sound... ";
    };
    turnOff(){
        return "Sounf... ";
    };
    otherStart(){
        return "Calling turnOn() : "+this.turnOn();
    }
};

class Motorcicle extends Vehicle{
    // polymorphism
    turnOn(){
        return super.turnOn() + " Rumm Rumm";
    };
    // polymorphism
    turnOff(){
        return super.turnOff() + " flip";
    };
};
class Truck extends Vehicle{
    turnOn(){
        // calling the superior method (optional)
        return super.turnOn() + " Clak Clak";
    };
    turnOff(){
        // calling the superior method (optional)
        return super.turnOff() + " Plop Plop";
    };
};

let myVehicle = new Vehicle(),
    myMotorcicle = new Motorcicle(),
    myTruck = new Truck()
    ;

console.log(
    "----P O L Y M O R P H I S M----"+
    `\nmyVehicle\n---Turn on = ${myVehicle.turnOn()}\n---Turn off = ${myVehicle.turnOff()}\n`+
    `\nmyMotorcicle\n---Turn on = ${myMotorcicle.turnOn()}\n---Turn off = ${myMotorcicle.turnOff()}\n`+
    `\nmyTruck\n---Turn on = ${myTruck.turnOn()}\n---Turn off = ${myTruck.turnOff()}\n`
);


// BY default, clases in js, are extends from class Object
/*

----this

class NewClass{
    
};

----is equal to this

class NewClass extends Object{

}

it's mean, our clases for default have some methods like
toString()
*/

// console.log(
// myMotorcicle.toString()  by default return [object Object]
// );

console.log(
    myVehicle.otherStart()+"\n"+
    myMotorcicle.otherStart()+"\n"+
    myTruck.otherStart()+"\n"
);

console.log(
    `\nmyVehicle.constructor.name: ${myVehicle.constructor.name}`+
    `\nmyMotorcicle.constructor.name: ${myMotorcicle.constructor.name}`+
    `\nmyTruck.constructor.name: ${myTruck.constructor.name}`
);