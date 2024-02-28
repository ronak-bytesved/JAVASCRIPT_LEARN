// // at() method
// let arr = ["ronak","raju",23,32];
// let arr2 = [12,"ram"]
// let fruit = arr.at(2);
// console.log(fruit);

// // join() method join all array element into string
// console.log(arr.join(" * "));

// // pop and push ,pop remove element and push add element at the end

// console.log(arr.pop());
// console.log(arr)

// // shift and unshift method , shift remove the element at the beginning and 
// // unshift add the element in the array at the beginning

// let sf = ["ronak","ram","lakhan",34];
// console.log(sf.shift());//remove the first element

// console.log(sf.unshift("raju"));  // add the element at the beginning
// console.log(sf)

// // changing am=n element

// sf[1] = "baleno";//change the element no index 1
// console.log(sf);

// // use pop pr shift for the remove element
// delete sf[2];//delete element but its undefined holes in the array
// console.log(sf);
// console.log(sf.length);

// // merging two arrays using concat() method
// let ar = ["ronak","raju"];
// let ar2 = ["ruchi","tejash"];
// let ar3 = ["rohit","akash"];

// let ar4 =  ar.concat(ar2,ar3);
// console.log(ar4);
// // concat method does not change the array its always use the new array
// console.log(ar.concat(ar2));

// // copywithin  used for copy an array element to the another position in the array
// let cp = ["ronak","raju","tejash","jigar","dham0","smit"];
// console.log(cp.copyWithin(2,0,4));


// let flt = [[1,2],[3,4],["ronak","raju"]];
// let new_flt = flt.flat(); 
// console.log(new_flt);


// splicing and slicing array
// splice method is used to add new array elements in the array
let arr = ["ronak","raju","rahul"];
// arr.splice(2,1,"raman","akash") ;
// console.log(arr);
// arr.splice(0,1) ;
// console.log(arr);
// console.log(arr.length);
// let k = arr.toSpliced()(2,0,"Roa");
// console.log(k)

// slice method is used for out piece in the array
// its does  not effect original array
let k= arr.slice();
console.log(k)
console.log(arr)

console.log(arr.toString());
// console.log(p);
// console.log(typeof p);
console.log(typeof arr);