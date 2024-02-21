// lets print a star pattern

// console.log("print square pattern using star")
// let string = "";
// for(let i  = 1;i<=5;i++){
//     for(let j = 1;j<=5;j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// console.log("print pettern")
// let str = "";
// for(let i=5;i>=1;i--){
//     for(let j = i;j>=1;j--){
//         str += "*";
//     }
//     str += "\n";
//     }
// console.log(str);

// console.log("hollow print pettern")
// let str = "";
// for(let i=1;i<=5;i++){
//     for(let j =1;j<=5;j++){
//         if(i === 1 || i === 6-1){
//             str += "*";
//         }
//         else if(j === 1 || j=== 6-1){
//             str += "*";
//         }
//         else{
//             str += " ";
//         }
//     }
//     str += "\n";
//     }
// console.log(str);
debugger
// console.log("print right triangle");
// let str ="";
// for(let i = 1;i<=5;i++){

//     //print space
//     for(let j =1;j<=(5-i);j++){
//         str += " ";
//     }
//     // print star
//     for(let k = 1;k<=i;k++) {
//         str+="*";
// }
//     // print new line
//     str+="\n";
// }
// console.log(str); 


console.log("print piramid")
let str = "";
for(let i =1;i<=5;i++){

    for(let j = 1;j<=(5-i);j++){
        str += " ";
    }
        for(let k = 1;k<=i;k++){
            str += " *";
    }
    str += "\n";
}
console.log(str)