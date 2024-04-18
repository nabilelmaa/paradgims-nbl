const add = (a, b) => {
  return new Promise((resolve, reject) => {
    let sum = a + b;
    resolve(sum);
  });
};

const multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    let product = a * b;
    resolve(product);
  });
};

const subtract = (a, b) => {
  return new Promise((resolve, reject) => {
    let difference = a - b;
    resolve(difference);
  });
};

const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Division by zero error not allowed!");
    }
    let ratio = a / b;
    resolve(ratio);
  });
};

let a = 7;
let b = 0;

Promise.all([
    add(a, b),
    multiply(a, b),
    subtract(a, b),
    divide(a, b)
  ])
    .then(results => {
      const [addResult, multiplyResult, subtractResult, divideResult] = results;
      console.log(`Sum = ${addResult}`);
      console.log(`Product = ${multiplyResult}`);
      console.log(`Difference = ${subtractResult}`);
      console.log(`Ratio = ${divideResult}`);
    })
    .catch(err => {
      console.error(err);
    });

Promise.race([add(a, b), multiply(a, b), subtract(a, b), divide(a, b)])
  .then((result) => {
    console.log("Result of the first settled promise:", result);
  })
  .catch((err) => {
    console.error(err);
  });
