console.clear();
class Person{
    static personCounter=0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = Person.personCounter++;
    };
    get id(){
        return this._id
    };
    get nombre(){
        return this._nombre;
    };
    set nombre(nombre){
        this._nombre=nombre;
    };
    get apellido(){
        return this._apellido;
    };
    set apellido(apellido){
        this._apellido=apellido;
    };
    get edad(){
        return this._edad;
    };
    set edad(edad){
        this._edad=edad;
    };
    to_string(){
        return this._nombre+" :)!";
    }
};

class Empleado extends Person{
    constructor(nombre, apellido, edad,sueldo){
        super(nombre, apellido, edad);
        this._sueldo=sueldo;
    };
    get idEmpleado(){
        return super.id;
    };
    get sueldo(){
        return this._sueldo;
    };
    set sueldo(sueldo){
        this.sueldo=sueldo;
    };
};

class Cliente extends Person{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        const now = new Date();
        this._fechaIngreso = `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`;
    };
    get idCliente(){
        return super.id;
    };
    get fechaIngreso(){
        return this._fechaIngreso;
    };
    set fechaIngreso(fechaIngreso){
        this._fechaIngreso = fechaIngreso;
    };
};
function printPerson(obj,objName){
    console.log(
    `   ${objName}id:          ${obj.id}`+
    `\n   ${objName}.nombre:    ${obj.nombre}`+
    `\n   ${objName}.apellido:  ${obj.apellido}`+
    `\n   ${objName}.edad:      ${obj.edad}`+
    `\n   ${objName}.to_string: ${obj.to_string()}`
    );
};
function printEmpleado(empl,empl_name){
    console.log(
        `\nObject Name: ${empl_name}`+
        `\n   ${empl_name}.idEmpleado: ${empl.idEmpleado}`+
        `\n   ${empl_name}.sueldo:     ${empl.sueldo}`
    );
    printPerson(empl,empl_name);
};

function printCliente(cli,cli_name){
    console.log(
        `\nObject Name: ${cli_name}`+
        `\n   ${cli_name}.idCliente:    ${cli.idCliente}`+
        `\n   ${cli_name}.fechaIngreso: ${cli.fechaIngreso}`
    );
    printPerson(cli,cli_name);
};

let empleado1 = new Empleado("Rychy","Hernández",21,15000),
    empleado2 = new Empleado("Willy","Wolfsong",23,15000),
    cliente1 = new Cliente("Juan","Martinez",23),
    cliente2 = new Cliente("Marcela","Gutierrez",32)
    ;
printEmpleado(empleado1,"empleado1");
printEmpleado(empleado2,"empleado2");
printCliente(cliente1,"cliente1");
printCliente(cliente2,"cliente2");
