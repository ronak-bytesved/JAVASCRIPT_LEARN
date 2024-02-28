let a = 7;
let b = 9;

let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("its not allowed");
} else {
  console.log(sum);
}


function add() {
    let x= 1;
  try {
    console.log(" sum is " + sum * x);
    return true;
  } catch (e) {
    console.log("error aa gaya bhai");
    return false;
  } finally {
    console.log("this is all are closed");
  }
  // console.log(sum)
}
let c = add();
