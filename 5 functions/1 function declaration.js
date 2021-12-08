/*
Function declaration.

Comenzaremos por la más sencilla de todas, la "Function declaration".
Este tipo de función se creará con la palabra reservada function, seguido 
obligatoriamente por un nombre, que identificará a nuestra función, una
lista de parámetros entre paréntesis, y el símbolo de las llaves {}. 
Qué será el que delimite el contenido de nuestro conjunto de sentencias.

La lista de parámetros cuando creamos una función no es obligatoria, 
podemos definir una función sin parámetros.

Cuando estemos trabajando con funciones es importante que diferencies
entre parámetro y argumento. 
    ->Un parámetro es/son la/s variables que definimos cuando creamos la función.
    ->Y los argumentos son los datos que pasamos a la función cuando la invoquemos.
      Serán los valores de los parámetros de la función.

Una vez hemos visto cómo definir nuestra función en Javascript, 
realicemos un simple ejemplo.
*/
console.log("\n\nEjemplo 1")
function hola(nombre){
     console.log(`Hola ${nombre}.`)
}

hola("rychy");    // => Hola tu nombre

/*
En este ejemplo definimos nuestra función hola con un parámetro "nombre" y escribirá
por consola hola y el nombre con el que hayamos invocado nuestra función.

Otra característica es que por defecto las funciones
devuelven el valor "undefined". Si queremos que nuestra
función devuelva algún valor debemos utilizar la instrucción 
"return" en nuestro bloque.
*/
console.log("\n\nEjemplo 2")
function respuesta(){
}

console.log(respuesta());    // => undefined

function respuesta2(){
     return 'Hola';
}

console.log(respuesta2());   // => Hola

/*
Además este tipo de funciones son compatibles con el hoisting. 
El hoisting es una característica de Javascript por la cual las definiciones
se ejecutan al principio de la ejecución del código.

Si por ejemplo escribimos el siguiente código.
*/
console.log("\n\nEjemplo 3")
hello('Rychy');      // => Hola Rychy
function hello(nombre) {
    console.log(`Hola ${nombre}.`)
}

/*
No obtendremos error al invocar la función hola, 
que aún no ha sido creada, ya que Javascript lo habrá ejecutado de
la siguiente forma:
*/

// function hello(nombre){
//     console.log(`Hola ${nombre}.`)
// }

// hello('Rychy');    // => Hola Rychy