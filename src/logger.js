function logger(func) {
  return function () {
    return func.apply(this, arguments);
  };
}

function sum(a, b) {
  return a + b;
}
const decSum = logger(sum);
sum(3, 2);
if (decSum(2, 3) === 5) console.log("Win");

// function logger1(func) {
//   return func();
// }
