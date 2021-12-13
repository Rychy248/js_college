"use strict"

try {
    x = 34;
} catch (ReferenceError) {
    console.log("ReferenceError Ocurred\n x isn't defined");
    console.log("\nBut Don't worry you can continue after this!")
} finally{
    console.log("Here finished my try catch, this messegue always be printed");
}
