
// this is global variable which you can use anywhere in program
let a = 5;

function v(){
    // this is local variable which is used in only blocks of code
    var p = "hello world"
    console.log(p)
}
// function call
v();
console.log(a);

// it will show undefined value
console.log(p);


// there are three variable
// 1. let - It is block scoped, meaning that the variables declared with let are
// available for the entire block of code where they have been declared. If we try to access them

// 2. const - it is also block scoped  but once assigned its value cannot be changed.
// if we try to assign again then it will give an error.

//  3. var - It is function scoped i.e., the variables declared using var are
// available within the whole function regardless of block scope. So, if you declare a variable
// inside a block (if, while etc.), it’s still accessible outside of that block. However,
//  functions declared using var are hoisted and hence become globally accessible even though they were declared inside a