/*
Otra de las novedades de ES6 son las "Arrow function". La forma de crear estas funciones es la siguiente: Primero definiremos la lista de parámetros, en caso de ser necesario, entre paréntesis seguido del símbolo => y las {} para indicar las instrucciones que se van a realizar.

Además de la sintaxis que es diferente a las anteriores este tipo de funciones tienen las siguientes características.

    Las "arrow function" no crean su propio contexto al ejecutarse. Al contrario que las "function expression" o las "function declaration" que crea su propio contexto.

    Las "arrow function" son anónimas.

    El objeto arguments no se encuentra en el contexto de la función.

    Si al definir la función no utilizamos el símbolo de las llaves. La función devolverá como resultado de la función el resultado de la ejecución de la instrucción que hayamos indicado.

Como en las demás ocasiones vamos a verlo con un pequeño ejemplo.

const saluda = (nombre) => {
   return `Hola ${nombre}`;
}

console.log(saluda('Victor'))   // => Hola Victor

// Vamos a compactar un poco más el código.
const saluda2 = (nombre) => `Hola ${nombre}`;

console.log(saluda2('Victor'));  // => Hola Victor

En estos dos ejemplos hemos escrito una "arrow function" a la cuál le enviamos como parámetro un nombre y nos devuelve la cadena de texto "Hola ". Ambas funciones son iguales, pero en el segundo ejemplo podemos observar como las "arrow function" nos han devuelto un cadena de texto sin utilizar la instrucción return.

*/