// // let str = "hello this is\\ good men";
// // let str1 = "hello this is \t good men";
// // let str2 = "hello this is \n good men";
// // console.log(str2);

// // note : string return a new string they dont modify it

// // string method

// let str = "hello ronak prajapati";
// console.log(str.length);//to find length of string

// console.log(str.charAt(2));//to return the character for specific index 
// console.log(str.charAt(-2)); //nagetive index does not take


// // extracting parts of string
// let str2 = "hey ronak prajapati you are good developer";

// console.log(str2.slice(2,8));//to get particular part of string
// console.log(str2.slice(-5));//nagetive value is taken

// console.log(str2.substring(4,12));

// console.log(str2.substr(12,5));//the second para is length

// // concat the string ,merge the string
// let x = str.concat(" " + str2);
// console.log(x);

// let y  = "     ronak     prajapati      ";
// console.log(y.trim());//remove white spece from both side of string

// // repeat the string
// let k = "ronak";
// console.log(k.repeat(5));

// // replace te value in string

// let r = "raju bhai prajapati";
// console.log(r.replace("prajapati","uk"));

// let j= "j k j k j k j k j k";
// console.log(j.replace("j","l"));
// console.log(j.replace(/j/g,"l"));//using  regex to match all 'j' , /g is used

// let a ="a b a b a b a b";
// // console.log(a.replaceAll())

// // split a string
// let n = "hello this is good enough";
// let z = n.split(" ")
// console.log(z);
// console.log(typeof z)


let str = "hello ronak prajapati you are genius r k  r k r k r k";
// console.log(str.indexOf('ronak'));

// console.log(str.search('ronak'));
console.log(str.match(/k/g));