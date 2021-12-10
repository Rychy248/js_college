console.clear()
let person1={
    name:"Rychy",
    last_name:"Hernández",
    full_name:function(){
        return `${this.name} ${this.last_name}`
    }
};


console.log(
    "Printing the object person1"+
    `\n---person1.name        = ${person1.name}`+
    `\n---person1.last_name   = ${person1.last_name}`+
    `\n---person1.full_name() =  ${person1.full_name()}`
);

//adding properties to person1
person1.address = "San Andrés Sajcabajá";
person1.phone_number = "+502 4209 0991";

console.log(
    "Printing the new properties object person1"+
    `\n---person1.address      = ${person1.address}`+
    `\n---person1.phone_number = ${person1.phone_number}`
);
console.log("\n\nCommon methods of object 'Objects.values()' 'Objects.keys()'");
console.log(
    `--JSON.stringify(person1) = ${JSON.stringify(person1)}`+
    `\n--Object.keys(peson1) = ${Object.keys(person1)}`+
    `\n--Object.values(peson1) = ${Object.values(person1)}`
);

console.log("\n\nNow we're goign to delete all properties of 'persona1' except the last property");

let person1Length = Object.keys(person1).length, 
    i=0;

for (key in person1){
    i++;
    if (person1Length !== i){
        console.log(`person.${key} deleted...`);
        delete person1[key];
    }else{
        console.log(`The last key of 'person1' is ${key}`);
    };
};
console.log(
    "The complet object 'person1' is "+JSON.stringify(person1)+
    "\n\n"
);