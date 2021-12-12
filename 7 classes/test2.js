myList = [
    "index0",
    "index1",
    "index2",
    "index3",
    "index4",
    "index5",
    "index6",
]

myObject = {
    key0:"value0",
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
    key5:"value5",
    key6:"value6",
}
console.log("for in myObject");
for (const key in myObject) {
    console.log(key);
};

console.log("for of myObject"+
'\nfor (const iterator of myObject) {'+
'\n    console.log(iterator);'+
'\n};'+
'\n'+
'\nTypeError: myObject is not iterable'
);

console.log("\n\nfor in myList");
for (const key in myList) {
    console.log(key);
};
console.log("for of myList");
for (const iterator of myList) {
    console.log(iterator);
};