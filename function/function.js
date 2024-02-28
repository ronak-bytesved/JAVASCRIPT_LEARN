// function is block of code design to perform particular task
// js function is call when someone is invoked(call it).

function fname(fname){
    return "your name is " + fname;
}
// console.log(fname("raju prajapati"));

// let name = fname("ronak prajapati");
// console.log(name);

//lets create sum function to calculate the value 
// let addNums = function (a,b) {
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
// }
// console.log("your ans is : ");
// addNums(2,3);

// to convert feranhit to celcius
let feranhit = function(fahr){
    return (5/9)*(fahr - 32);
}
// console.log();
// console.log("you ans is : " + feranhit(6))
let y = "feranhit to celcius is "  + feranhit(6);
console.log(y);