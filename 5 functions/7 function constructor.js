/*
Y finalmente la "Function constructor".
Es una forma bastante inusual de declarar las funciones pero vamos a verla también.
Tal vez no sea útil en algún momento.

En Javascript las funciones son objetos de "primera clase". Esto quiere decir
que se pueden crear nuevas funciones durante la ejecución del programa.
Veamos más en detalle cómo crear esta tipo de funciones.

Las funciones en Javascript, son funciones, y poseen el constructor Function.
Por ello podremos crear una variable que invoque a un objeto Function. Cuando
invoquemos a este objeto podremos enviar todos los argumentos que deseemos.
Los primeros n argumentos serán los parámetros de nuestra función y el último
argumento será el código de nuestra función.

Veámoslo en detalle con el siguiente ejemplo. Imaginad que necesitamos crear una
función que sume dos valores en tiempo de ejecución.
*/
const sumaFunction = new Function('numero_1 ', 'numero_2', 
   'return numero_1 + numero_2'
);

// Ejecutamos nuestra función.
console.log(sumaFunction(10, 15)) // => 25

/*
En este ejemplo hemos creado la constante sumaFunction que crea una nueva instancia del
objeto Function al cual le enviamos tres argumentos.
Los dos primeros argumentos, 'numero_1' y 'numero_2'
serán los parámetros de nuestra nueva función y el tercer parámetro
será el cuerpo de nuestra función.

Esta forma de definir esta función es equivalente a la siguiente:
*/
const sumaFunction2 = function(numero_1, numero_2) {
    return numero_1 + numero_2
}

// Ejecutamos nuestra función.
console.log(sumaFunction(10, 15)) // => 25
// C O N C L U S I O N
/*
Hemos visto 7 formas diferentes de definir funciones en Javascript.
No podemos decir que hay una forma mejor que otras. 
En función de la situación en la que nos encontremos o el problema que
queramos resolver será mejor utilizar una u otra.
*/