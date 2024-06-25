console.log("Hello Typescript");
var x = 10; // Type inference
console.log("x", x);
//x = "20"; // Static type checking
var y; // Type any	===> var y: any
y = 20;
console.log("y", y);
y = "hello";
console.log("y", y);
var z; // Type annotation
z = 30;
console.log("z", z);
var user;
user = { id: 1, name: "Anil" };
var filterAnArray;
filterAnArray = function (arr, searchNumber) {
    return arr.filter(function (item) {
        return item > searchNumber;
    });
};
var resultArray = filterAnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log("resultArray", resultArray);
var s1 = "Hello";
s1 = 10;
var ws = "open";
