/*                   OBJETOS
todo en js son objetos, es un programa orientado a objetos
en python es distinto todo esta orientado a clases, js es un lenguaje
que no tiene de forma natural clases, es más las clases
que tiene en realidad son simuladas con objetos
*/

let x= 10; // dato primitivo, no tiene propiedades ni métodos.

let persona1 ={ // un objeto en js es algo que tiene propiedades y métodos
    name:"Rychy",
    last_name:"Hérnandez",
    age:21,
    get_name:function(){
        return `${this.name}`;
    },
    get_last_name:function(){
        return `${this.last_name}`;
    },
    full_name:function(){
        return `${this.get_name()} ${this.get_last_name()} :)`;
    },
}
console.clear();

console.log(
    `Accediendo a los atributos del objeto "persona":`+
    `\n---persona1.name        = ${persona1.name}`+
    `\n---persona1.last_name   = ${persona1.last_name}`+
    `\n---persona1.age         = ${persona1.age}`+
    `\n---persona1 OBJECT      = ${JSON.stringify(persona1)}`+
    `\n---persona1.full_name() = ${persona1.full_name()}`
);

console.log("\nOtra forma de crear un objeto")
let persona2 = new Object();
persona2.name = "Carlos";
persona2.last_name = "Lara";
persona2.address = "San Andŕes Sajcabajá";
persona2.full_name = function(){
    return `${this.name} ${this.last_name}`;
};

console.log(
    '-let persona2 = new Object();'+
    '\n-persona2.name = "Carlos";'+
    '\n-persona2.last_name = "Lara";'+
    '\n-persona2.address = "San Andŕes Sajcabajá";'+
    '\n-persona2.full_name = function(){'+
    '\n-    return `${this.name} ${this.last_name}`;'+
    '\n-};'+
    "\n\nAccediendo al objeto persona2"+
     `\n---persona2.name        = ${persona2.name}`+
     `\n---persona2.last_name   = ${persona2.last_name}`+
     `\n---persona2.address     = ${persona2.address}`+
     `\n---persona2 OBJECT      = ${JSON.stringify(persona2)}`+
     `\n---persona2.full_name() = ${persona2.full_name()}`
);

console.log(
    "\nAccediendo a los métdos mediante"+
    `\n---persona1['name'] = ${persona1['name']}`+
    `\n---persona2['name'] = ${persona2['name']}`
);


console.log("\n\nUsando el for in con el objeto persona2");

// for in return keys of an object
let person2Lenght = (Object.keys(persona2)).length;
let i = 0;

for (key in persona2){
    i ++;
    console.log(
        `---`+(
            (typeof(persona2[key]) === 'function')?
            `persona2[${key}]() = ${persona2[key]()}`:
            `persona2[${key}] = ${persona2[key]}`
            )
    );
    if (person2Lenght === i){
        console.log(`Last key is ${key}!`);
    };
};