//var a = undefined; var b=undefined;


foo();
console.log("a", a);
var a = 10 // global scope
console.log("a", a);

var b;
console.log("b", b); //undefined

//console.log("c", c);//reference error



function foo(){
    //var str=undefined;
    console.log("in foo");
    var str = "hello"

    if(str === "hello"){
        let x = 10;
        console.log("x", x);
    }
    

}