// pasando argumentos por valor
let x=10; // dato de tipo primitivo, no tiene metodos ni atributos
let myList=["a","b","c"]; // dato de tipo objeto

function MyFunction(a,b){
    return `${a} ${b}`;
};

function ChangeList(a){
    myList.push(a);
    function hi(c){
        my_var="Hi there";
        console.log(my_var);
        myList.push(a);
    };
    hi()
};

console.log(
    MyFunction("Hola","Mundo!")
);
console.log(myList);
ChangeList("element added");
console.log(myList);
console.log(my_var);

function hi(gretting,forGrettings=1){
    console.log(`gretting=${gretting} typeof=${typeof(gretting)}`);
    console.log(`forGrettings= ${forGrettings} typeof=${typeof(gretting)}`);
    for (let i=1;i<=forGrettings;i++){
        console.log(`Hi ${gretting} [${i}]`);
    };
    console.log("\n")
};

hi(gretting="Rychy!",forGrettings=5)


const persona={
    nombre:"Rychy",
    apellido:"Hernández",
};


// jugando un poco con el tiempo
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
  
async function loading() {
    for (let i=0;i<=100;i+=10){
        process.stdout.write(`Cargando... ${i}%`);
        await sleep(150);
        if (i<=100){
            process.stdout.write("\r");
        }else{
            process.stdout.write("\n");
        };
    };  

    // Llamando a estas funciones en este momento porque cargando es una funcion
    // asincronica es decir otro, y quiero que hasta que termine esto 
    // se ejecute lo siguiente
    console.log("\n\nPasando el valor de memoria de un objeto por referencia en JS\n");
    console.log(persona);
    cambiarValorObjeto(persona) // cambiando el valor 
    console.log(persona);
    
};
  
loading(); // jejejej


function cambiarValorObjeto(p1){
    process.stdout.write("console.debug(p1); => "); // imprimir sin salto de linea
    console.debug(p1);
    console.dir(p1); // node js
    console.log("Referencias obtenidas del objeto que contiene: "+JSON.stringify(p1));
    p1.nombre="Jorge";
    p1.apellido="Gonzales";
};

