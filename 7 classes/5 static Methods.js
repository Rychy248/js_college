// STATIC is keword for asociated an method and atributes to a class,
// only with self and her children
// this method isn't asociated to our objects

console.clear();

class Vehicle{
    mySelfName(){
        return "Vehicle";
    };
    turnOn(){
        return "Sound... ";
    };
    turnOff(){
        return "Sounf... ";
    };
    otherStart(){
        return "Calling turnOn() : "+this.turnOn();
    };
    static iFather(myName){
        return `Hi I'M THE CLASS ${myName.toUpperCase()} FATHER! ;)`;
    };
    static staticMethod(objectFromMe){
        return objectFromMe.turnOn()+` Calling from Her/His Father `+objectFromMe.mySelfName();
    };
};

class Motorcicle extends Vehicle{
    mySelfName(){
        return "Motorcicle";
    };
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
    mySelfName(){
        return "Truck";
    };
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

console.log(
    "\n----S T A T I C----"+
    "\nStatic methods can't be called by objets!"+
    "\n\nObject 'myMotorcicle' calling method '.iFather()' = TypeError: myMotorcicle.iFather is not a function"+
    "\n\nFor call a an Static method, we have to call it directly from the class father\n"+
    "\nVehicle.iFather('Vehicle') = "+Vehicle.iFather("Vehicle")+
    "\nMotorcicle.iFather('Motorcicle' = "+Motorcicle.iFather("Motorcicle")+
    "\nTruck.iFather('Truck') = "+Truck.iFather("Truck")+"\n"+
    `\nVehicle.staticMethod(myVehicle) = ${Vehicle.staticMethod(myVehicle)}`+
    `\nMotorcicle.staticMethod(myMotorcicle) = ${Motorcicle.staticMethod(myMotorcicle)}`+
    `\nTruck.staticMethod(myTruck) = ${Truck.staticMethod(myTruck)}`
);