// let person = {
//     Name:"ronak",
//     age:22,
//     no:233232
// }
// for(let x in person){
//     console.log(x + " :"+ person[x]);
//     // console.log(person[x]);
// }

let arr = ["ronak","raju",22];
// for(let x in arr){
//     console.log( x + " " + arr[x]);///print key:values pairs
//     console.log(arr[x]);//print only value
// }

arr.forEach(myfun);
function myfun(value,index,array){
    console.log(value,index,array);

}