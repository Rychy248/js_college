let my_old_array = new Array("0","1","2","3","4","5","6","7"); //forma de definir un array, ES ANTIGUO Y EN DESUSHO
let my_new_array = ["a","b","c","d","e"];//forma moderna
console.log(`My old array; ${my_old_array}\nMy new array ${my_new_array}`)
    
console.log("Recorriendo el array 'my_new_array' con for normal'")
for (let i=0;i<my_new_array.length;i++){ //of recorre los elementos
    console.log(`i:${i} my_new_array[i]:${my_new_array[i]} my_new_array.indexOf(my_new_array[i]):${my_new_array.indexOf(my_new_array[i])}`)
};
console.log("the before method is inconsistend to read an array\n\n")

console.log("Recorriendo array my_new_array con un for 'OF'")
for (element of my_new_array){ //of recorre los elementos
        console.log(" contenido",element)
};

console.log("Recorriendo array 'my_new_array' con un for 'IN'");
for (index in my_new_array){ //in recorre las llaves o indices
    console.log(" index",index);
};

console.log("Modificando los elmentos del array 'my_new_array': ");
console.log("my_new_array:"+my_new_array);
i = 10
for (index in my_new_array){ //modificando por indice
    console.log(`index ${index} Old element ${my_new_array[index]}`);
    my_new_array[index] = i;
    i+=10;
    console.log(`index ${index} New element ${my_new_array[index]}`);
}
console.log("my_new_array:"+my_new_array+"\n\n");
let odd_index = [], even_index=[];
console.log("separando con los indices impares\nMy old array:"+my_old_array+"\nodd_index:"+odd_index+"\neven_index:"+even_index);
for (index in my_old_array){        
    if (index%2===0){
        even_index.push(index);
        console.log(`even_index.push(${index});`);
    }else{
        odd_index.push(index);
        console.log(`odd_index.push(${index});`);
    };
};
console.log("Resultado final\nodd_index:"+odd_index+"\neven_index:"+even_index);
console.log("\n\nOtras formas de agregar elementos a un array\nagregando por index a odd_index");
console.log("odd_index.lenght:"+odd_index.length+` (max index${odd_index.length-1})`+"\nodd_index:"+odd_index);
console.log("For initialating...")
for (i=20;i<140;i+=20){
    odd_index[odd_index.length] = i;
    console.log("odd_index[odd_index.length] = i;");
    console.log(`odd_index[${odd_index.length-1}] = ${i};`);
};
console.log("odd_index[this will be a new index] = increase element;");
console.log("For ended");
console.log("odd_index.lenght:"+odd_index.length+` (max index${odd_index.length-1})`+"\nodd_index:"+odd_index);
// cosole.log("odd_index[it's the way to update an existen index] = new value;");
console.log("\n\n");
let strange_array=[];
console.log("Creating an array where only multiples of 5 are used as index");
console.log(
"strange_array.lenght:"+strange_array.length+
" strange_array max index="+(strange_array.length>0?strange_array.length-1:"Null")+
" strange_array:"+strange_array
);
for (let i=0;i<=10;i++){
    strange_array[i*5]=i;
}
console.log(
"strange_array.lenght:"+strange_array.length+
" strange_array max index="+(strange_array.length>0?strange_array.length-1:"Null")+
" strange_array:"+strange_array
);
console.log("last method isn't recomended 'cause is an extremely lose of memory")



console.log("\n\nIdentificadon un arreglo"+
"\npara esto no nos sirve typeof(), puesto que esto nos dice que es en realidad un object"+
"\npara esto tenemos dos opciones:"+
"\nArray.isArray(array_a_evaluar)"+
"\narray_a_evaluar instance of Array"
);

let data={
    myObject:{uno:"1",dos:"2"},
    myArray:[1,2,3,4,5],
    myString:"Hello World"
};
console.log("console.log(typeof(data.myObject))="+typeof(data.myObject));
console.log("console.log(typeof(data.myArray))="+typeof(data.myArray));
console.log("console.log(typeof(data.myString))="+typeof(data.myString));

function testTypeOfVar(varObj,varName) {
    if (Array.isArray(varObj)){
        console.log(`${varName} is an array`);
    }else{
        console.log(`${varName} is not an array`);
    };    
};
console.log(
    "\n\nfunction used...\n\n"+
    "\nfunction testTypeOfVar(varObj,varName) {"+
    "\n    if (Array.isArray(varObj)){"+
    "\n        console.log(`${varName} is an array`);"+
    "\n    }else{"+
    "\n        console.log(`${varName} is not an array`);"+
    "\n    };    "+
    "\n};"+
    "\nResult of the funtion..."
);
testTypeOfVar(data.myObject,"myObject");
testTypeOfVar(data.myArray,"myArray");
testTypeOfVar(data.myString,"myString");

function testInstanceOfVarn(varObj,varName) {
    if (varObj instanceof Array){
        console.log(`${varName} is an array`);
    }else{
        console.log(`${varName} is not an array`);
    };    
};
console.log(
    "\n\nfunction used...\n\n"+
    "\nfunction testInstanceOfVarm(varObj,varName) {"+
    "\n    if (varObj instanceof Array){"+
    "\n        console.log(`${varName} is an array`);"+
    "\n    }else{"+
    "\n        console.log(`${varName} is not an array`);"+
    "\n    };    "+
    "\n};"+
    "\nResult of the funtion..."
);
testInstanceOfVarn(data.myObject,"myObject");
testInstanceOfVarn(data.myArray,"myArray");
testInstanceOfVarn(data.myString,"myString");