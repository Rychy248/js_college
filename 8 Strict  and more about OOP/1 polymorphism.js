"use strict"

class Employed{
    name;
    salary;
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    };
    getDetail(){
        return `Name: ${this.name}\nSalart: ${this.salary}`
    };
};

class Gerent extends Employed{
    departament;

    constructor(name,salary,departament){
        super(name,salary);
        this.departament = departament;
    };  
    getDetail(){
        return "Gerente:\nDepartament: "+this.departament+"\n"+super.getDetail();
    };
};

function printDetail(obj){
    if (obj instanceof Gerent){
        console.log("Object from Gerent");
    }else if(obj instanceof Employed){
        console.log("Object from Employed");
    };
    console.log(obj.getDetail()+"\n");
};

function main(){
    console.clear();

    let myEmployed = new Employed("Stalman",2342),
        myGerent = new Gerent("Rychy",23423,"Gerence");

    printDetail(myEmployed);
    printDetail(myGerent);
};

main();