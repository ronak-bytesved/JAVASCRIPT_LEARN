// iterating array using foreach function
// let arr = ["ronak",33,"raju","jimi","khushi"];
// let txt = "";
// arr.forEach(myfun);

// function myfun(value,index,array){
//     txt += value + "<br>";
// }
// console.log(txt)

// iterating array using map

// let arr = ["ronak","rau","gorilla"];

// let txt = "";
// arr.map(myfun);
// console.log(txt);

// function myfun(value,index,array){
//          txt += value +  " " +  index +  " " + array+ "<br>";
// }
// console.log(arr)

// flatmap() method

// let arr= [1,2,3,4,5,6];
// let number = arr.flatMap(x=> x*3);//its multiply the array element with 3
// console.log(number)

// filter() method in array

let arr = [2, 32, 34, 65, 3232, 4, 31, 3423, 5, 65, 56, 4];

// // console.log(arr.filter(flt));
// let p = arr.filter(flt)
// console.log(p)
// function flt(value){
//     return value > 10;
// }
// console.log(arr);

// reduce function

// let sum = arr.reduce(add);
// function add(total,value){
//     return total + value;
// }
// console.log(sum);

// it can take initial value
// let sum = arr.reduce(add,100);
// function add(total,value){
//     return total + value;
// }
// console.log(sum);

// every() method check the check the condition for all the element of an array if setisfied

// let sum = arr.every(check);
// function check(value){
//     return value >0;
// }
// console.log(sum)

// let sum = arr.some(check);
// function check(value) {
//   return value < 0;
// }
// console.log(sum);

// let obj = {
//   Name: "ronak",
//   age: 22,
//   address: "mehsana",
// };
// for (let key in obj) {
//   return key;
// }
// let str = "hello ronak";
// let p = Array.from(obj.key);
// console.log(p);
// console.log(obj);


// let fruits = ["banana","orange","mango","apple"];
// let key = fruits.keys();

// let txt = " ";
// for(let keys in fruits){
//     txt += keys + "<br>";
// }
// console.log(txt);

// let fruits = ["banana","orange","mango","apple"];
// let f = fruits.entries();
// let txt = "";
// for(let x of f){
//     txt += x + "<br>";
// }
// console.log(txt);

// let arr1 = [1,2];
// let arr2 = [3,4];
// let arr3 =[5,6];

// let number = [...arr1,...arr2,...arr3];
// console.log(number);
// console.log(typeof number);
