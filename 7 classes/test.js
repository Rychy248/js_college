class Duck{
    static objectsFromMe = 0;
    static legs = 2;
    sound = "Cuak CUak";
    
    constructor (){
        Duck.objectsFromMe ++;
        console.log("Existing ducks = "+Duck.objectsFromMe)
    };
};

let myDucks = [];

for (let i=0; i<5;i++){
    myDucks.push({
        duckName:"Duck"+i,
        duck:new Duck(),
    });
};


for(key in myDucks){
    console.log(JSON.stringify(myDucks[key]));
};

console.log("\n\nBye bye there!");