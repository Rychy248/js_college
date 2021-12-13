"use strict"
console.clear()
try {
  throw Error("This is my own error :)!");
} catch (Error) {
    console.log("Error name: "+Error.name);
    console.log("Error msg: "+Error.message);

} finally{
    console.log("You haved seen my error\n enjoy it! ;D");
};

