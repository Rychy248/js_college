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
    `\n---person1        = ${JSON.stringify(person1)}`+
    `\n---person1.name        = ${person1.name}`+
    `\n---person1.last_name   = ${person1.last_name}`+
    `\n---person1.full_name() =  ${person1.full_name()}`
);

console.log(
    "\nWorking with get--, it's better for our functions who in fact return values like properties"+
    "\nthat's why we're goign to define a new person Object 'person2' with this form\n"+
    "\nlet person2={"+
    "\n    name:'Carlos',"+
    "\n    last_name:'Lara',"+
    "\n    get full_name (){"+
    "\n        return `${this.name} ${this.last_name}`"+
    "\n    }"+
    "\n};    "
);
let person2={
    name:"Carlos",
    last_name:"Lara",
    get full_name (){
        return `${this.name} ${this.last_name}`
    }
};

console.log(
    "\nPrinting the object person2"+
    `\n---person2        = ${JSON.stringify(person2)}`+
    `\n---person2.name        = ${person2.name}`+
    `\n---person2.last_name   = ${person2.last_name}`+
    `\n---person2.full_name   =  ${person2.full_name}`+
    "\n\nLook whit 'get' we haven't put '()' before our function 'full_name' now"+
    "\nit's work like a property and not like a function/method"
);

console.log(
    "\nWorking with set--, set method is used for validations or modify the data"+
    "\nrecived, set and get work like properties of our object its mean, it's necesary to put"+
    "\n() paretesis after set or get's name\nso we're going to define a new object for thes porpuse:\n"+
    "\nlet person3={"+
    "\n    name:'Karli',"+
    "\n    last_name:'Yac',"+
    "\n    get full_name (){"+
    "\n        return `${this.name} ${this.last_name}`"+
    "\n    },"+
    "\n    language: 'es_GMT',"+
    "\n    get lang(){"+
    "\n        return this.language.toUpperCase();"+
    "\n    },"+
    "\n    set lang(lang){"+
    "\n        this.language = lang.toUpperCase()"+
    "\n    }"+
    "\n};    "
);

let person3={
    name:"Karly",
    last_name:"Up",
    get full_name (){
        return `${this.name} ${this.last_name}`
    },
    language: "es_GMT",
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase()
    }
};

console.log(
    "\nPrinting the object person3"+
    `\n---person3           = ${JSON.stringify(person3)}`+
    `\n---person3.name      = ${person3.name}`+
    `\n---person3.language  = ${person3.language}`+
    `\n---person3.last_name = ${person3.last_name}`+
    `\n---person3.full_name = ${person3.full_name}`+
    `\n---person3.lang      = ${person3.lang}`+
    "\n\nNow we're set a new value for lang, person3.lang = 'es_mx';"
);
person3.lang = "es_mx";
console.log(
    "When we get the value of lang or language propertie of person3, we get it in an UPPERCASE form"+
    "\nwhy?, because of our set method in person3"+
    `\n---person3.language = ${person3.language}`+
    `\n---person3.lang     = ${person3.lang}`
);