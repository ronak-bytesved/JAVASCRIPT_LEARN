// an array is variable it can store more than one value
//array can store any value like string ,numebr,boolean etc
let arr = ["ronak","raju","raman",44,43,"dhamo",990,"akash","nayan",true];
console.log(arr);
console.log(typeof arr);

console.log(arr.toString());
console.log(arr.length);

// let arr2 = ['ram','lakhan','sita'];
// let text = "<ul>";
// arr2.forEach(fun);
// text += "</ul>";
// function fun(value){
    // text += '<li>' + value + '</li>';
// }
// console.log(text);
// 


let arrr = [
    {firstname:"ronak",lastname:"prajapati",age:22},
    {firstname:"dharmendra",lastname:"vagheal",age:25},
    {firstname:"jagdish",lastname:"bramhan",age:33},
    {firstname:"jigar",lastname:"parmar",age:27},
    {firstname:"jigar",lastname:"parmar",age:27},
    {firstname:"jagdish",lastname:"bramhan",age:33},
    {firstname:"sunil",lastname:"thakor",age:34},
];


//it will give a first element of  array
// console.log(arrr.map(Name => {
    // return Name.firstname + " " + Name.lastname;
// }));
// 
// let output = arrr.reduce(function (a,c){
    // if(a[c.age]){
        // a[c.age] = ++a[c.age];
    // }
    // else{
        // a[c.age] = 1;
    // }
    // return a;
// 
// },{});
// console.log(output);
// 

let output = arrr.filter(x => 
    x.age > 30
    ).map(y => y.firstname);
console.log(output)


// this is the second thing you can make array in js
// const arr1 = new Array(1,2,"ronak",23);
// console.log(arr1);

