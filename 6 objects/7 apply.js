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
    `Using call, with call we can use external methods with or without parameters`+
    `\nthe argumets have pased separeted by comas, (OBJ, arg1,arg2....,argn)`+
    `\nperson1.full_name() = ${person1.full_name()}`+
    `\nperson1.full_name.call(person2) = ${person1.full_name.call(person2)}`+
    `\nperson1.academic_grade("Lic.") = ${person1.academic_grade("Lic.")}`+
    `\nperson1.academic_grade.call(person2,"Inge.") = ${person1.academic_grade.call(person2,"Inge.")}`
);

//use apply
console.log(
    `\nUsing apply, with apply we can use external methods with or without parameters`+
    `\nthe argumets have pased as an Array, (OBJ, [arg1,arg2....,argn])`+
    `\nperson1.full_name() = ${person1.full_name()}`+
    `\nperson1.full_name.apply(person2) = ${person1.full_name.apply(person2)}`+
    `\nperson1.academic_grade("Lic.") = ${person1.academic_grade("Lic.")}`+
    `\nperson1.academic_grade.call(person2,["Inge."]) = ${person1.academic_grade.call(person2,["Inge."])}`
);