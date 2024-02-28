// array search 
// let arr = ["ronak","mango","rahul","raman","mango",23,"kinjal"];
// console.log(arr.length);
// console.log(arr.indexOf("mango")+1);
// console.log(arr.lastIndexOf("mango")+1);

// find method
let arr = [2,3,4,51,34,32,22,21];
// let f = arr.find(myfun);
// let f = (arr.findIndex(myfun)+1);
// let f = (arr.findLast(x => x >21));
// let f = (arr.findIndex(x => x >21)+1);
let f = (arr.findLastIndex(x => x >21)+1);
console.log(f)

// function myfun(value,index){
//     return value > 12;
// }