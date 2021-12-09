/*
Otra de las novedades de ES6 son las "Arrow function".
La forma de crear estas funciones es la siguiente:
    -Primero definiremos la lista de parámetros, en caso de ser necesario,
    entre paréntesis 
    -seguido del símbolo => y las {} para indicar las instrucciones
    que se van a realizar.

Además de la sintaxis que es diferente a las anteriores este tipo de funciones
tienen las siguientes características.

    -Las "arrow function" no crean su propio contexto al ejecutarse. 
     Al contrario que las "function expression" o las "function declaration"
     que crea su propio contexto.
    -Las "arrow function" son anónimas.
    -El objeto arguments no se encuentra en el contexto de la función.
    -Si al definir la función no utilizamos el símbolo de las llaves.
     La función devolverá como resultado de la función el resultado de la
     ejecución de la instrucción que hayamos indicado.

Como en las demás ocasiones vamos a verlo con un pequeño ejemplo.
*/
const saluda = (nombre) => {
   return `Hola ${nombre}`;
};

console.log(saluda('Rychy'))   // => Hola Rychy

// Vamos a compactar un poco más el código.
const saluda2 = (nombre) => `Hola ${nombre}`;

console.log(saluda2('Rychy'));  // => Hola Rychy

/*
En estos dos ejemplos hemos escrito una "arrow function" a la cuál le enviamos
como parámetro un nombre y nos devuelve la cadena de texto "Hola ".
Ambas funciones son iguales, pero en el segundo ejemplo podemos
observar como las "arrow function" nos han devuelto un cadena de
texto sin utilizar la instrucción return.
*/



/*
An example where, we have an object, for each key, are a function
these functions are a type of "Arrow function"
first two return, with the explicit keyword 'return'
but the second, also, return the result, without the explicit keyword 'return'
so, why it's happen, it's posible becase the arrow functions have a special 
conduct, he always need to return something, if it's not seted he set as
a return the result of his inner operation, ands, that's other thing, he need
a operation in.
*/
let AritmeticOperations={
    sum: {
        symbol:"+",
        func:(a,b) =>{return a+b}
    },
    substrac: {
        symbol:"-",
        func:(a,b) =>{return a-b}
    },
    multiply: {
        symbol:"*",
        func:(a,b) =>a*b
    },
    division: {
        symbol:"/",
        func:(a,b) =>a/b
    },
};

let a=4,b=10;

for (const key in AritmeticOperations) {
    if (Object.hasOwnProperty.call(AritmeticOperations, key)) {
        a++,b++;
        console.log(
            `Aritemtic operation ${key}: `+
            `${a} ${AritmeticOperations[key].symbol} ${b} =`+
            AritmeticOperations[key].func(a,b)
        );
    };
};