function add(x) {
    return x + 10;
}
function subtract(x) {
    return x - 5;
}
// Without pipeline operator
let val1 = add(subtract(add(subtract(10))));
console.log(val1);


// this is pipeline operator 
// let val2 = 10 |> subtract |> add |> subtract |> add;
// console.log(val2);