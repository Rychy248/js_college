console.clear()

class Person{
    static personId=0;

    static get MAX_OBJ(){
        return 5;
    };
    constructor(name,last_name){
        this.name = name;
        this.last_name = last_name;

        if (Person.personId < Person.MAX_OBJ){
            this.id = Person.personId++;
        }else{
            throw new RangeError("No more people please! limit:"+Person.MAX_OBJ);
        };
    };

    get full_name (){
        return `${this.id}: ${this.name} ${this.last_name}`;
    };

    gretting(name){
        return "Hi "+name+"!";
    };
};

let rychy = new Person("Rychy","Hernández");
let brey = new Person("Brey","Hernández");
let isidra = new Person("Isidra","Gonzales");

console.log(
    rychy.full_name+" said: "+rychy.gretting("Brey")+
    "\n"+brey.full_name+" said: "+brey.gretting("Isidra")+
    "\n"+isidra.full_name+" said: "+isidra.gretting("Brey")+
    "\n\nMax objects for Person class: "+Person.MAX_OBJ
    );

let karla = new Person("Karla","Gonzales");
let rouse = new Person("Rouse","Hernández");

console.log(
    `${karla.full_name} ${karla.gretting("Rouse")}`+
    `${rouse.full_name} ${rouse.gretting("karla")}`+
    "\n\nNow we try to creat a new person ----// no more people please"
);

let joe = new Person("Joe","Hernández");
