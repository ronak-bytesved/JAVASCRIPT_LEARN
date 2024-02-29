let str = "hello raju you buy a raju mobile RAJU buy a iphone";
console.log(str.indexOf('buy'));
console.log(str.lastIndexOf('buy'));

// search a string 
console.log(str.search(/raju/));

// return a matches character
console.log(str.match(/ju/gi));

//return true or false
console.log(str.includes('r'));

// 
console.log(str.startsWith('hello'));

console.log(str.endsWith('iphone'));



