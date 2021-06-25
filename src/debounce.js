const debounce = (func, timeout) => {
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
  }, 1);

  if (counter >= timeout) {
    counter = 0;
    // clearInterval(interval);
    return func;
  }
  // return setTimeout(() => {}, timeout);
};
const f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован
setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500);
