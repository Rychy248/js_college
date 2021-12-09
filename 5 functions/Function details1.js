//Las funciones son objetos a fin de cuentas

function MyFunction(a,b,c){ // parametros a, b, c, las variables que necesita la funcion
    console.log(
        "El número de argumentos de esta función son: "+
        arguments.length // este es un atributo del objeto MyFunction
    );

    return a+b+c;
};

MyFunction("a","b","c"); // argumentos "a" "b" "c", los valores que pasamos
console.log(
    "\n\nto.string es un método que devuelve toda la función en texto\n\n"+
    MyFunction.toString()
);

function MyFunction2(sentadilla="hola",circle=4,jump=3){
    console.log(
        "\n//el primer parametro: "+arguments[0]+" es decir el argumento no ha sido pasado"+
        "\n//el segundo parametro: "+arguments[1]+" es decir el argumento no ha sido pasado"+
        "\n//el tercer parametro: "+arguments[2]+" es decir el argumento no ha sido pasado"
    );
    console.log(
        `\nAunque nosotros tengamos por default en los parametros ciertos valores:`+
        `sentadilla=${sentadilla} circle=${circle} jump=${jump}`+
        `Estos son valores por defecto de los parametros no argumentos que nos pasaron`
        );

};
MyFunction2();

function MyFunction3(a,b,c){
    return `ahora me pasaron ${arguments.length} argumentos`;
};
console.log(
    "\n\nEn javascript no es necesario que conincidan el número de argumentos con el número de parametros"+
    "\nque posee la función, por ejemplo esta función que vamos a llamar tiene 3 argumentos definidos;"+
    `\nMyFunction3("a","b","c")     =>${MyFunction3("a","b","c")}`+
    `\nMyFunction3("a","b","c","d") =>${MyFunction3("a","b","c","d")}`+
    `\nMyFunction3("a","b")         =>${MyFunction3("a","b")}`+
    "\nComo vemos no es necesario que concida el número de argumentos con el número de parametros de la funcion"
);

function sumNums(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    let iAsText = sumNums.toString();
    return `${sum} \n\n${iAsText} ${typeof(iAsText)}`;
};

console.log(
    "sumNUms(1,3,4,5,6,7,8,9,10) = "+sumNums(1,3,4,5,6,7,8,9,10)
);  