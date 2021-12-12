// STATIC ATRIBUTES are equal to STATIC METHODS
// we can call them by the class not from objects
console.clear();

class Vehicle{
    static ObjectsCounter=0;
    constructor(){
        // for modify an static atribute we can't use 'this'
        // because this is refered to an object and not to the class
        // for that purpose we need to call directly the class
        Vehicle.ObjectsCounter++;
        console.log(`An vehicle object has been created ${Vehicle.ObjectsCounter}`);
    };
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
    static MyStaticVar = 0;
    constructor(){
        super();
        Motorcicle.MyStaticVar++;
        console.log("A Motorcicle has been created "+Motorcicle.MyStaticVar);
    }
    mySelfName(){
        return "Motorcicle";
    };
    turnOn(){
        return super.turnOn() + " Rumm Rumm";
    };
    turnOff(){
        return super.turnOff() + " flip";
    };
};
class Truck extends Vehicle{
    mySelfName(){
        return "Truck";
    };
    turnOn(){
        return super.turnOn() + " Clak Clak";
    };
    turnOff(){
        return super.turnOff() + " Plop Plop";
    };
};

let myVehicle = new Vehicle(),
    myMotorcicle = new Motorcicle(),
    myTruck = new Truck()
    ;

console.log(
    "\n----S T A T I C----"+
    "\nStatic methods can't be called by objets!"+
    "\n\nObject 'myMotorcicle' calling method '.iFather()' = TypeError: myMotorcicle.iFather is not a function"+
    "\n\nFor call a an Static method, we have to call it directly from the class father\n"+
    "\nVehicle.iFather('Vehicle') = "+Vehicle.iFather("Vehicle")+
    "\nMotorcicle.iFather('Motorcicle' = "+Motorcicle.iFather("Motorcicle")+
    `\nVehicle.staticMethod(myVehicle) = ${Vehicle.staticMethod(myVehicle)}`+
    `\nTruck.staticMethod(myTruck) = ${Truck.staticMethod(myTruck)}`
);

console.log(
    "\n"+
    "\nStatic atributes can't be called by objets!"+
    "\nmyMotorcicle.ObjectsCounter = "+myMotorcicle.ObjectsCounter+
    "\nVehicle.ObjectsCounter =  "+Vehicle.ObjectsCounter+
    "\nTruck.ObjectsCounter =  "+Truck.ObjectsCounter+
    "\nMotorcicle.ObjectsCounter =  "+Motorcicle.ObjectsCounter+
    "\nMotorcicle.MyStaticVar =  "+Motorcicle.MyStaticVar
);