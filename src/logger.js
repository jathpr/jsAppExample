const logger = (func) => {
  let counter = 0;
  return function () {
    console.log(
      "🚀 ~ file: logger.js ~ line 6 ~ arguments",
      arguments,
      " counter ",
      counter++
    );
    const sum = func.apply(this, arguments);
    console.log("🚀 ~ file: logger.js ~ line 11 ~ sum", sum);
    return sum;
  };
};

function sum(a, b) {
  return a + b;
}
const decSum = logger(sum);
sum(3, 2);
if (decSum(2, 3) === 5) console.log("Win");
decSum(2, 3);
decSum(2, 3);
decSum(2, 3);
