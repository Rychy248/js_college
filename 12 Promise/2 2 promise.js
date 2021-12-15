"use strict"
console.clear()

// PROMISE EXAMPLE THREE
let users=[
        {id:1,name:"Rychy"},
        {id:2,name:"Karl"},
        {id:3,name:"Brey"}
    ],
    phoneNumbers=[
        {id:1,number:123123},
        {id:2,number:123123},
        {id:3,number:542322}
    ];

const getUser = id=>{ 
    return new Promise((resolve,reject)=>{
        if(users.find(user=> user.id == id)){
            console.log(`User finded:\n ${JSON.stringify(users.find(user=> user.id == id))}`);
            // last resolve, this string will be printed into the then arrow function
            // resolve(`User finded:\n ${JSON.stringify(users.find(user=> user.id == id))}`);
            // now it's replaced by an promise like a response
            resolve(getPhoneNumber(id));
        }else{
            reject(`User not finded!\n(Searched by id:"${id}")`);
        }
    });
};
const getPhoneNumber = id=>{ 
    return new Promise((resolve,reject)=>{
        if(phoneNumbers.find(phoneNumber=> phoneNumber.id == id)){
            resolve(`Phone Number finded:\n${JSON.stringify(phoneNumbers.find(phoneNumber=> phoneNumber.id == id))}`);
        }else{
            reject(`Phone Number not finded!\n(Searched by id:"${id}")`);
        }
    });
};

getUser(2)
.then((res)=>{
    // console.log(res) this operation will be executed into the getUser
    return res; // who it's a promise too
    // this res will be answer for the next .then
})
.then((res)=>{
    console.log(res);  
    // this res is from the getPhoneNumber 
    // searched by the id seted into the getUser
})
.catch((err)=>{
    console.log(`An error was ocurred:\n${err}`);
});