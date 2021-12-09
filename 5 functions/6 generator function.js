/*
Hasta el momento todas las funciones que hemos visto se ejecutan completamente,
y no se paran hasta la última línea de la función 
Si queremos salir con antelación de una función debemos ejecutar un return,
o lanzar un error.

Por lo que las instrucciones que se encuentren a continuación del return 
o el error no se ejecutará
n.
Pero la característica más significativa de estas funciones es 
que nos permite parar o salir de la función en un punto dentro del
conjunto de instrucciones que forman nuestra función y retornar
posteriormente la ejecución desde el punto en el que paramos anteriormente.

La sintaxis de estas funciones es igual a las
"function declaration" o "function expression".
Sólo debemos utilizar el símbolo * al comienzo de la definición de
nuestra función.

Otra diferencia de estas funciones es que siempre retorna un objeto
con la siguiente estructura 
cada vez que invoquemos a la función next().

{
    value: any,
    done: true|false
}

Como puedes observar el objeto tiene dos propiedades.
  -value, qué es el valor actual del objeto y 
  -done, que nos indica si la función a finalizado o no.

Pero ahora mismo te estarás preguntando cómo debo salir de la función
y cómo vuelvo después a ella, y se sigue ejecutando desde el
punto en que salí.

Veámoslo con un simple ejemplo donde lo explicaré detalladamente y
será más sencillo comprender el funcionamiento de este tipo de funciones.
*/

function *generatorFunction()
{ 
  console.log('Ejemplo generator Function.');
  // yield. Salimos de la función.
  // La propiedad value es igual a 'Un kit kat'
  yield 'Este es mi value "Un kit kat"';  

  console.log(' ¿ Continuamos ?');  
  // yield. Volvemos a salir de la función.
  // La propiedad value es igual a 'Fin del ejemplo'
  yield 'Ahora este es mi value: "Fin del ejemplo"';
}

const gen = generatorFunction();
let genResult;
genResult=gen.next();
console.log(`value: ${genResult.value} status(done):${genResult.done}`);
console.log('La función se encuentra pausada');        
genResult=gen.next(); 
console.log(`value: ${genResult.value} status(done):${genResult.done}`);
genResult=gen.next();
console.log(`value: ${genResult.value} status(done):${genResult.done}`);


// El resultado de la ejecución sería el siguiente: 

/*
Lo primero que hemos realizado en este ejemplo ha sido crear la 
función generatorFunction. Posteriormente hemos asignado a la constante 
gen nuestra función. Una vez realizada la tarea de asignación de nuestra
función a una variable la invocamos por primera vez.

genResult=gen.next();
console.log(`value: ${genResult.value} status(done):${genResult.done}`);

De esta forma comienza la ejecución de nuestra función. 
Donde la primera instrucción muestra en la consola el mensaje 
"Ejemplo generator Function". La siguiente instrucción es:

yield 'Un kit kat';  

La instrucción yield nos retorna un objeto, como ya vimos anteriormente.
Cuyas propiedades son el texto que enviamos 'Un kit kat' en value,
y false en la propiedad done.

Ahora ya estamos fuera de la función, podemos ejecutar las instrucciones
que deseemos, mientras nuestra función se encuentra en pausa.
En nuestro ejemplo mostramos por consola el mensaje
"La función se encuentra pausada".

Una vez ejecutada(s) nuestra(s) instrucción(es) invocamos de 
nuevo a nuestra función que se encontraba en pausa.

genResult=gen.next(); 
console.log(`value: ${genResult.value} status(done):${genResult.done}`);


Que nos mostrará por consola el siguiente mensaje "¿ Continuamos ?". 
Y finalizará nuestra función con el siguiente mensaje 
por consola "Fin del ejemplo".

*/