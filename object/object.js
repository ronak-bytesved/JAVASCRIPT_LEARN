// this is object literals methid to create an object
// let bytesved_tech = {
//     Name : "byteveda technology",
//     employee : 30,
//     establish : 199,
//     address : "PNTC,vejalpur",
//     city : "Ahmadabad",
//     ronak: function(){
//         return "company name is : " +this.Name + ", city is " + this.city
//     }
// };
// console.log(bytesved_tech.Name);
// console.log(bytesved_tech["Name"]);
// let ram = bytesved_tech.ronak();
// console.log(ram)
// console.log();

 
//using new keyword you can create an object
// const person = new Object();
// person.firstname = "ronak" ;
// person.lastname = "prajapati";
// person.age = 22;
// person.address = "mehsana";
// console.log(person);
// const x= person
// console.log(x)
// for(let k in person){
//     // console.log(k);
//     console.log(k + " : " +person[k]);
// }

// // after deleting the property of the object person
// // delete person.age;
// // delete person["age"];
// for(let k in person){
//     // console.log(k);
//     console.log(k + " : " +person[k]);
// }


// its differant way to create a object in js using object.create method
// let company2 = Object.create(bytesved_tech); //creating object of the above class/object
// company2.name="Techmint";
// console.log(company2.name);//accessing the property using dot operator

// nestesd object
const car = {
    Name:"neno",
    price:100000,
    today:new Date(),
    details:{
        owner_name:"ronak",
        color:"red",
        year:2023
    }
}
console.log(car);
let st = JSON.stringify(car);
console.log(st)
console.log(typeof st)
console.log(typeof car)
// console.log(Object.values(car))
// add method in objects
// car.fullname = function(){
//     return  (this.details.owner_name+ " "+this.Name).toUpperCase();
// }
// console.log(car.fullname());
// for(let  key in car.details){
//     let p =(car.details[key]);
//     console.log(Object.values(p));
// }