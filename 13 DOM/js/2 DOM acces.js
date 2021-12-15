"use strict" 
console.log("Hola desde el DOM");

// return condition1 ? value1
// : condition2 ? value2
// : condition3 ? value3
// : value4

let text_var = document.getElementById("text_var");
console.log("Valor del h3 text_var"+text_var.innerHTML);

let user_name = document.getElementById("user_name");
console.log("Nombre:"+user_name.innerHTML);

let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


setInterval(() => {
    user_name.innerHTML = "Rychy Hernández";
    text_var.innerHTML = "Hola que tal!";

    function changeName(){
        user_name.innerHTML = "Brey Hernández";
        text_var.innerHTML = "Hi there!";
    };
    // setTimeout is a callback function, recibe a function callback after the time seted
    setTimeout(changeName, 1000);


}, 2000);

setInterval(()=>{
    let now = new Date();
    let flagPmAm = (now.getHours()>12)?"pm":"am";

    let timeLess10 = time =>{
        return (time<10)?`0${time}`
                        :`${time}`;
    };
    
    let hour_var = timeLess10((now.getHours()>12)?now.getHours()-12:now.getHours()),
        minutes_var = timeLess10(now.getMinutes()),
        seconds_var = timeLess10(now.getSeconds());
        
    hour.innerHTML = hour_var;
    minutes.innerHTML = minutes_var;
    seconds.innerHTML = `${seconds_var}${flagPmAm}`;
},1000);