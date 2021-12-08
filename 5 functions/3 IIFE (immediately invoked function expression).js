/*
Normalmente cuando definimos una función es porque la vamos a llamar en varias
ocasiones, pero y sí sólo queremos llamar a la función en una sola ocasión
y obtener un resultado. 

Para ello podemos utilizar la funciones IIFE. 
Este tipo de funciones se ejecutan inmediatamente y no son accesibles
posteriormente.

Para crear una función de este tipo deberemos crearla en 
un operador de agrupación (). Seguido de (),
lo que posibilitará el interpretado directamente
en el motor de JavaScript.

Veámoslo con un pequeño ejemplo.
*/
console.clear()
console.log(

( function () {
    let nombre = 'Rychy';
    return `\n\nHola ${nombre}`;
}
)()

);
// esa funcion retorn, Hola Rychy, la que seguidamente imprimo en consolo.log()


/*
Al definir nuestra función dentro de un operador de agrupación 
no permitimos acceder a variables fuera del IIFE, 
así como no "contaminar" el scope global.
*/

//EJEMPLO DE COMO NO AFECTA EL SCOPE GLOBAL LA FUNCTION
//(function () { 
//    var nombre = "rychy";
//})();

//console.log(nombre);

// Uncaught ReferenceError: nombre is not defined

function HelloWorld(){
    let messegue="Hello world";
    let varInMyFunction="This is a variable into my HelloWorld function";
    console.log(messegue);
};

// console.log(varInMyFunction)
// Uncaught ReferenceError: nombre is not defined
let varName="Rychy",varLastName="Hernández";

console.log("Usando la function IIFE pasando argumentos\ncon return");

console.log(
(
    function thisFunctionIsDestroyed(name,lastName) {
        return `Your complete name is ${name} ${lastName}`;
    }
)(varName,varLastName)
);


console.log("\nSIN return");
(
    function thisFunctionIsDestroyed(name,lastName) {
        console.log(`Your complete name is ${name} ${lastName}`);
    }
)(varName,varLastName);