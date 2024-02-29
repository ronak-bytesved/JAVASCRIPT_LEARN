// console.log("hello ronak");
let num = 55.4545;
console.log(num.toString());
// console.log(typeof num)

let expo  = num.toExponential();
console.log(expo);

let fix = num.toFixed(4);//specified argument apya etla decimal point  number return karse
console.log(fix);

//toPrecision() returns a string, with a number written with a specified length:
let topre = num.toPrecision(6);
console.log(topre);

let vlof = num.valueOf();
console.log(vlof);

//number can also convert a dates
//its return the output in miliseconds
console.log( Number(new Date('1970-06-01')));


//parseInt method
console.log(parseInt(5))
console.log(parseInt(6.11))
console.log(parseInt(11.12))
console.log(parseInt(0.5));
console.log(parseInt("66"));
console.log(parseInt("dd"));//nan

//issafeinteger
console.log(Number.isSafeInteger(5));
console.log(Number.isSafeInteger(555555));//16 number is safe but above is not
console.log(Number.isSafeInteger(55555322323245585));//17

console.log(Number(55555322323245585).toString().length);