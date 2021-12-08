/*
La siguiente forma de declarar una nueva función que vamos a ver
es muy similar al tipo de anterior, 

"Function Declaration". 

La sintaxis para crear estas funciones es similar a la anterior.

La única diferencia es que la definición de nuestra nueva función no
comienza por instrucción function y el nombre de la función es opcional.

Este tipo de funciones las podemos almacenar en una variable. 
Lo cual nos permite utilizarlas en algunos de los siguientes ejemplos.
*/

// Asignarla a una variable como un objeto
// const ejemplo = function(...) { ... }

// Crear un método en un objecto
// {
//    ...
//    'suma': function(...) { ... },
//    ...
// }

// Utilizar la función como un callback
// .cb(function(...) { ... })

/*
A continuación vamos a ver cómo crear una función que sumará dos
al argumento que enviemos a la función.
*/
const SUMADOS = function sumaDos(valor) {
     return valor + 2;
}

console.log("Suma dos a 5 = "+SUMADOS(5));    // => 7
console.log("Suma dos a 13 = "+SUMADOS(13));    // => 15

/*
Si al crear nuestra nueva función no utilizamos un identificador 
estaremos creando una función anónima.

Veámoslo con el mismo ejemplo.
*/
const RESTADOS = function(valor) {
     return valor - 2;
}

console.log("Resta dos a 10 = "+RESTADOS(10));    // => 8
/*
Como puedes ver el resultado es el mismo.

Un diferencia con las "Function Declaration"
es que estas no son compatibles con el hoisting.
Por ello si invocas una de estas funciones antes de su declaración
antes de su definición obtendrás un error.

hello('rychy')
// ReferenceError: hello is not defined

const hello = function hello(nombre) {
    console.log(`Hola ${nombre}.`)
}
*/