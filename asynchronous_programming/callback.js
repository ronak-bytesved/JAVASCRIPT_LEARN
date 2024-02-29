// a callback function means pass as argument to another function
debugger
let arr = [3,4,1,-1,15,72,-72,-54,56];

let posnumber = removeneg(arr,callback = function (x){ x >= 0});
console.log(posnumber)

function removeneg(number,callback){
    let myarray= [];
    for(let x of number){
        if(callback(x)){
            myarray.push(x);
        }
    }
    return myarray;
}