// // object literals in oops
// let person = {
//     firstname :"ronak",
//     lastname : "prajapati",
//     // method
//     getfunction:function(){
//         return (`the full name is ${this.firstname} ${this.lastname} `);
//     },
//     numer:{
//         phoneno:222222,
//         laneline:382732
//     }
// }
// console.log(person.getfunction());
// console.log(person.numer.phoneno, person.numer.laneline);

let coder = {
    isstudying:false,
    printintroduction :function(){
        return(`name is ${this.name} am i studing? : ${this.isstudying}`)
    }
};
debugger
let me = Object.create(coder);
me.name ="ronak";
me.isstudying = true;

let p = me.printintroduction();
console.log(p)


// classes
// lets defining treaditional way to defining a onject and simulating as object

// function person(Name,age,address){
    // this.Name = Name;
    // this.age = age;
    // this.address = address;
// 
// };
// person.prototype.getdetails = function(){
    // return "the name of person is " + this.Name ;
// }
// 
// let newp = new person("ronak",22,"mehsana");
// let newp2 = new person("raju",25,"mehsana");
// 
// console.log(newp.Name);
// console.log(newp.age);
// console.log(newp.getdetails());
// 

class animal{
    speak(){
        return this;
    }
    static eat(){
        return this;
    }
};

let a = new animal;
console.log(animal.eat())
console.log(a.speak());

