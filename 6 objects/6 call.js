console.clear();

let person1={
    name:"Juan",
    last_name:"Rodriguez",
    full_name :function () {
        return `${this.name} ${this.last_name}`
    },
    academic_grade: function (grade){
        return `${grade} ${this.name}`
    },
};

let person2={
    name:"Rychy",
    last_name:"Hernandez"
};

// use call to use an external method
console.log(
    `\nperson1.full_name() = ${person1.full_name()}`+
    `\nperson1.full_name.call(person2) = ${person1.full_name.call(person2)}`+
    "\nWe can use an external method just adding, the method call() to the an object method"+
    "\nthe requeriment is, both objects need to have same atributes, unless the arguments used into the method"+
    "\nwe put the object as argument into the external method of other object, like the last call"
);

console.log(
    "\nGivin arguments into call"+
    `\nperson1.academic_grade("Lic.") = ${person1.academic_grade("Lic.")}`+
    `\nperson1.academic_grade.call(person2,"Inge.") = ${person1.academic_grade.call(person2,"Inge.")}`
);