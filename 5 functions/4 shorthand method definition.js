/*
El cuarto tipo de definición que vamos a ver es el "Shorthand method".
Este forma de crear las funciones puede ser utilizado como método en la
declaración de un objeto o en las clases de ES6.

Para crear este tipo de función debemos asignar un nombre de función
seguido de una lista de parámetros entre paréntesis y los símbolos de
llaves para delimitar el cuerpo de las instrucciones.

*/
//Lo veremos mejor con un ejemplo.
const poblacion = {
  personas: [],            // parte uno
  //first function
  add(...isLikeArgs) {     // parte dos del objeto
    this.personas.push(...isLikeArgs);
  },
  //second function
  saluda() {               // parte tres del objeto
    this.personas.forEach(element => {
        console.log(`Hola soy ${element}!`);
      }
    );
    console.log(`Y juntos somos los backgardigans`);
  }
};

poblacion.add('Luis', 'Jesus', 'Rychy',"Jorge");
poblacion.saluda() // => 'Hola a todas las personas en la lista

/*
Veamos en detalle este ejemplo. 
Add() y saluda() son dos métodos de la clase poblacion que hemos definido 
con el método "Shorthand". A continuación hemos invocados los dos métodos 
de la clase. En primer lugar poblacion.add para añadir cuatro personas, 
Luis, Jesus, Rychy y Jorge. Y posteriormente hemos invocado al método saluda.

Como puedes observar esta sintaxis es muy sencilla, si escribiéramos esta misma 
función de una manera clásica sería como a continuación.
*/

console.log("Segunda clase con funciones expression");
const poblacion2 = {
  personas: [],                //parte uno del objeto
  add: function(...personas) { //parte dos del objeto
    this.personas.push(...personas);
  },
  saluda: function() {    //parte tres del objeto
    this.personas.forEach(element => {
      console.log(`Hola soy ${element}`);
    });
  }
};

poblacion2.add('Luis', 'Jesus', 'Victor');
poblacion2.saluda(); // => 'Hola a todas las personas en la lista