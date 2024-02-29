// callback hell means function call i the function

function add(a, b) {
  return callback(value + 5, false);
}
function sub(x, y) {
  return callback(value - 2, false);
}
function mul(x, y) {
  return callback(value * 7, false);
}
function div(x, y) {
  return callback(value / 2, false);
}
console.log(
  add(5, function (addres, err) {
    if (!err) {
      sub(addres, function (subres, err) {
        if (!err) {
          mul(addres, function (mulres, err) {
            if (!err) {
              div(addres, function (divres, err) {
                console.log(results);
              });
            }
          });
        }
      });
    }
  })
);
