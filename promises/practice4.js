//🔥 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

const myFunction = (callback) => {
  setTimeout(callback, 2000);
};
const invokeCallback = () => {
  console.log("Envoked after 2 seconds.");
};
myFunction(invokeCallback);

//🙂 2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

const callbackBasedFunction = (arg1, arg2, callback) => {
  setTimeout(() => {
    let result = arg1 + arg2;
    if (result % 2 === 0) {
      callback(null, result);
    } else {
      callback(new Error(`${result} in NOT an even number.`), null);
    }
  }, 2000);
};

const promiseBasedFunction = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    callbackBasedFunction(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

let arg1 = 7;
let arg2 = 3;

promiseBasedFunction(arg1, arg2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

//🤣 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const url = "https://animechan.xyz/api/random/anime?title=naruto";
fetchData(url)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

//🚀 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const downloadURLsContent = (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } else {
            return response.text();
          }
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  });

  return Promise.all(promises);
};

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

downloadURLsContent(urls)
  .then((contents) => {
    contents.forEach((content, index) => {
      console.log(`URL ${index + 1}: ${content}`);
    });
  })
  .catch((error) => console.error(error.message));
//👌 5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

const add = (arg1, arg2) => {
  return Promise.resolve(arg1 + arg2);
};

const substract = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arg1 && arg2) {
        resolve(arg1 - arg2);
      } else {
        reject(new Error("Please provide an input of two numbers."));
      }
    }, 2000);
  });
};

const multiply = (arg1, arg2) => {
  return Promise.resolve(arg1 * arg2);
};

const performAsyncOperations = async (arg1, arg2) => {
  try {
    const [sum, difference, product] = await Promise.all([
      add(arg1, arg2),
      substract(arg1, arg2),
      multiply(arg1, arg2),
    ]);
    return [sum, difference, product];
  } catch (error) {
    console.error(error.message);
  }
};

performAsyncOperations(arg1, arg2)
  .then((results) => {
    const [sum, difference, product] = results;
    console.log(`${arg1} + ${arg2} = ${sum}`);
    console.log(`${arg1} - ${arg2} = ${difference}`);
    console.log(`${arg1} * ${arg2} = ${product}`);
  })
  .catch((error) => console.error(error.message));

//🙁 6. Consider an application that requires data from two different APIs to render a webpage. How would you use Promises to ensure that the page does not render until both API calls have completed?

//🤩 7. Calculate the sum of array using promises.
const calculateSumOfArray = (array) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error("The input in NOT an array!"));
    } else {
      let sum = array.reduce((current, accumulator) => {
        return current + accumulator;
      });
      resolve(sum);
    }
  });
};
const array = [1, 2, 3, 4, 5];

calculateSumOfArray(array)
  .then((result) => {
    console.log(`The sum of the array is: ${result}`);
  })
  .catch((error) => console.error(error.message));
//🤩 8. Find the maximum value of array using promises.

const maximumValueOfArray = (array) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error("The input in NOT an array!"));
    } else {
      let max = array.reduce((current, accumulator) => {
        return Math.max(current, accumulator);
      });
      resolve(max);
    }
  });
};

maximumValueOfArray(array)
  .then((element) => {
    console.log(`The maximum element in the array is: ${element}`);
  })
  .catch((error) => console.error(error.message));




