//🔥 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
const myFunction = (callback) => {
  setTimeout(callback, 2000);
};

const myCallback = () => {
  console.log("Envoked after 2 seconds.");
};

// myFunction(myCallback);

//🙂 2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

const getData = (callback1, callback2) => {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback1(data, callback2);
  }, 1000);
};

const sumCallback = (array, callback) => {
  let sum = array.reduce((prev, next) => {
    return prev + next;
  });
  callback(sum);
};

const printResultCallback = (result) => {
  console.log(result);
};

// getData(sumCallback, printResultCallback);
//--------------

const calculateSumOfArray = (array) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject("The input is NOT an array!");
    } else {
      resolve(
        array.reduce((prev, next) => {
          return prev + next;
        })
      );
    }
  });
};

// const array = [1, 2, 3, 4, 5];
// calculateSumOfArray(array)
//   .then((result) => {
//     console.log(`The sum of the array is: ${result}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//🤣 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
const BASE_URL = "http://localhost:8080/api/v1/movies";
const movie_id = "tt8093700";
const fetchData = (BASE_URL, movie_id) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/${movie_id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Error HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// fetchData(BASE_URL, movie_id)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//🚀 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const downloadContentURLL = async (URLs) => {
  try {
    //Map each URL to a promise
    const promises = URLs.map((url) => {
      fetch(url).then((response) => response.text());
    });
    //Wait for all promises to resolve
    const responses = await Promise.all(promises);
    return responses;
  } catch (err) {
    console.error(err);
  }
};
//--------------------
const downloadContentURL = async (URLs) => {
  const promises = URLs.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP! Status ${response.status}`);
          }
          return response.text();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  });
  return Promise.all(promises);
};

const URLs = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// downloadContentURL(URLs)
//   .then((contents) => {
//     contents.forEach((response, index) => {
//       console.log(`Content of URL ${index + 1}:`, response);
//     });
//   })
//   .catch((err) => {
//     console.log("Error downloading URLs: ", err);
//   });

//👌 5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

const add = (a, b) => {
  return Promise.resolve(a + b);
};

const substract = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a - b);
    }, 3000);
  });
};

const multiply = (a, b) => {
  return Promise.resolve(a * b);
};

const performSequentialOperations = async (a, b) => {
  try {
    const [sum, difference, product] = await Promise.all([
      add(a, b),
      substract(a, b),
      multiply(a, b),
    ]);
    /*
    Or 
    
    const sum = await add(a, b);
    const difference = await substract(a, b);
    const product = await multiply(a, b);
    */

    return [sum, difference, product];
  } catch (error) {
    throw error; // Propagate the error further
  }
};

const a = 7;
const b = 3;
performSequentialOperations(a, b)
  .then((results) => {
    const [sum, difference, product] = results;
    console.log(`${a} + ${b} = ${sum}`);
    console.log(`${a} - ${b} = ${difference}`);
    console.log(`${a} * ${b} = ${product}`);
  })
  .catch((err) => console.error(err));
