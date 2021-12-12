console.clear()
Array.prototype.random = function (length) {
    // here return an element from this
    return this[Math.floor((Math.random()*length))];
}


class EntryDispositive{
    /*Responsability: Creat new objects of Entry Dispotives*/
    _entryType;
    _marc;
    constructor(entryType,marc){
        this._entryType = entryType;
        this._marc = marc;
    }
    get entryType(){
        return this._entryType;
    };
    set entryType(entryType){
        this._entryType=entryType;
    };
    get marc(){
        return this._marc;
    };
    set marc(marc){
        this._marc=marc;
    };
    toString(){
        return `\n    ------Entry type: ${this._entryType}\n    ------Marc: ${this._marc}`;

    }
};


class Mouse extends EntryDispositive{
    /*Responsability: Create new Objects of Mouse*/
    static mouseCounter=0;
    idMouse;
    constructor(marc){
        super("clikc",marc);
        this.idMouse = Mouse.mouseCounter++;
    };
    get id(){
        return this.idMouse;
    };
    toString(){
        return `Mouse id: ${this.id} `+super.toString()
    };
};


class Keyboard extends EntryDispositive{
    /*Responsability: Create new Objects of Keyboard*/
    static keyboardCounter=0;
    idKeyboard;
    constructor(marc){
        super("Typing",marc);
        this.idKeyboard = Keyboard.keyboardCounter++;
    };
    get id(){
        return this.idKeyboard;
    };
    toString(){
        return `Keyboard id: ${this.id} `+super.toString()
    };
};


class Screen{
    /*Resposability: create a new Screen*/
    static ScreenCounters=0;
    idScreen;
    _marc;
    _size;
    constructor(marc,size){
        this.idScreen = Screen.ScreenCounters++;
        this._marc=marc;
        this._size=size;
    }
    get id(){
        return this.idScreen;
    };
    get marc(){
        return this._marc;
    };
    get size(){
        return this._size;
    };
    set marc(marc){
        this._marc=marc;
    };
    set size(size){
        this._size=size;
    };
    toString(){
        return `Screen Id: ${this.id}\n    ----Marc: ${this.marc}\n    ----Size: ${this.marc}`;
    };
};


class Computer{
    /*Resposability: Create a new computer*/
    static computerCounter=0;
    idComputer
    _name
    _screen
    _keyboard
    _mouse
    
    constructor(name,screen,keyboard,mouse){
        this.idComputer = Computer.computerCounter++;
        this._name = name;
        this._screen = screen;
        this._keyboard = keyboard;
        this._mouse = mouse;
    };
    get id(){
        return this.idComputer;
    };
    get name(){
        return this._name;
    };
    set name(name){
        this._name=name;
    };
    get screen(){
        return this._screen.toString();
    };
    set screen(screen){
        this._screen=screen;
    };
    get keyboard(){
        return this._keyboard.toString();
    };
    set keyboard(keyboard){
        this._keyboard=keyboard;
    };
    get mouse(){
        return this._mouse.toString();
    };
    set mouse(mouse){
        this._mouse=mouse;
    };
    toString(){
        return  (
            `  Pc Name: ${this.name}\n  Screen: ${this._screen.toString()}`+
            `\n  keyboard: ${this._keyboard.toString()}\n  Mouse: `+
            `${this._mouse.toString()}`
            );
    };
};


class Order{
    static OrdersCounter=0;
    computers=[];
    idOrder;
    constructor(){
        this.idOrder=Order.OrdersCounter++;
        console.log("Order created| Order Num. "+this.idOrder);
    }
    get id(){
        return this.idOrder;
    };
    addComputer(){
        let pcNames=["Mypc","Thispc","RychyPc","MsRobot","IdontNow","Monster"],
            pcName = pcNames.random(pcNames.length);

        let screenMarcs=["Lenovo","HP","Compac","Toshiba","Samsung"],
            screenSizes=["14","14.5","15","15.5","16"],
            screenMarc=screenMarcs.random(screenMarcs.length),
            screenSize=screenSizes.random(screenSizes.length),
            screen = new Screen(screenMarc,screenSize);

        let keyboardMarcs=["Manhatan","Samsung","Micrsoft","Apple","Alibaba"],
            keyboardMarc=keyboardMarcs.random(keyboardMarcs.length),
            keyboard = new Keyboard(keyboardMarc);

        let mouseMarcs=["Manhatan","Samsung","Micrsoft","Apple","Alibaba"],
            mouseMarc=mouseMarcs.random(mouseMarcs.length),
            mouse = new Mouse(mouseMarc);

        let computer = new Computer(pcName,screen,keyboard,mouse);
        this.computers.push(computer);
    };
    showComputers(){
        let stringtoReturn=(
            `\nOrder id [${this.id}] | `+
            `Computers in order(${this.computers.length}): `
        );
        for (let computer of this.computers){
            stringtoReturn+=(
                `\n******Computer Id: ${computer.id}`+
                ` | Computer Name ${computer.name}`
            );
        };
        return stringtoReturn
    };
    toString(){
        console.log(
            `Order id: ${this.id}`+
            `Computers details in order(${this.computers.length}): `
        );
        for (let computer of this.computers){
            console.log(computer.toString());
        };
    };

};


function main(){
    let myOrders=[];
    let pcInOrders=[0,1,2,3,4,5,6,7,8,9,10];

    for (let i = 0; i < 2; i++) {
        myOrders.push(new Order);
        let pcOrder = pcInOrders.random(pcInOrders.length);
        for (let j = 0; j<pcOrder;j++){
            myOrders[i].addComputer();
            console.log(
                `Computer add into order id ${i}\n`+
                myOrders[i].computers[j].toString()+
                "\n");  
        };
    };

    i=0;
    for (let order of myOrders){
        console.log(
            order.showComputers()
            );
    };
};

main()

console.log(
    "\n\n----------------------------------"+
    '\n{'+
    '\n    "System Created by":"Rychy! :)",'+
    '\n    email:"jorgeajrha@gmail.com",'+
    '\n    "GitHub Profile":"github/Rychy248"'+
    '\n}'+
    "\n\n\nBye Bye there! ;)\n"
    );