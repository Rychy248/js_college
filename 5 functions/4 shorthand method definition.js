/*
El cuarto tipo de definición que vamos a ver es el "Shorthand method". Este forma de crear las funciones puede ser utilizado como método en la declaración de un objeto o en las clases de ES6.

Para crear este tipo de función debemos asignar un nombre de función seguido de una lista de parámetros entre paréntesis y los símbolos de llaves para delimitar el cuerpo de las instrucciones.

Lo veremos mejor con un ejemplo.

const poblacion = {
  personas: [],
  add(...personas) {
    this.personas.push(...personas);
  },
  saluda(index) {
    return `Hola soy ${this.personas[index]}`;
  }
};

poblacion.add('Luis', 'Jesus', 'Victor');
poblacion.saluda(1) // => 'Hola soy Jesus'

Veamos en detalle este ejemplo. Add() y saluda() son dos métodos de la clase poblacion que hemos definido con el método "Shorthand". A continuación hemos invocados los dos métodos de la clase. En primer lugar poblacion.add para añadir tres personas, Luis, Jesus y Victor. Y posteriormente hemos invocado al método saluda, enviando como parámetro 1 que nos devuelve un saludo de la persona número 1, en nuestro ejemplo Jesús.

Como puedes observar esta sintaxis es muy sencilla, si escribiéramos esta misma función de una manera clásica sería como a continuación.

const poblacion = {
  personas: [],
  add: function(...personas) {
    this.personas.push(...personas);
  },
  saluda: function(index) {
    return `Hola soy ${this.personas[index]}`;
  }
};

poblacion.add('Luis', 'Jesus', 'Victor');
poblacion.saluda(1); // => 'Hola soy Jesus'
*/