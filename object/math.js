// round()
let num = 12.5;//13
let num2 = 12.3;//12
let p = Math.round(num2);
console.log(p)

// floor and ceil 
let f  = Math.floor(num);
console.log(f);

let c = Math.ceil(num2);
console.log(c)

// trunc return the integer value
let num3 = 4.5;
console.log(Math.trunc(num3));

let num4 = -7;
console.log(Math.sign(num4));

// pow 
let num5 = 9;
console.log(Math.pow(num5,3));

// sqrt
let num6 = 64;
console.log(Math.sqrt(num6));

// min and max
console.log(Math.min(4,3,25,3,23324,0,-20));

console.log(Math.max(12,2,34,33,234,232,4343,33,55,45,23));

// generate rendom number

console.log((Math.round(Math.random()*10)));