//1. Write a JavaScript function `calculateSum` that takes an array of numbers as input and a callback function.
//The function should calculate the sum of the numbers in the array and pass the result to the callback function.

const calculateSum = (array, callback) => {
  sum = array.reduce((current, accumulator) => {
    return current + accumulator;
  });
  callback(sum);
};

const printResult = (result) => {
  console.log(`The sum of the array is: ${result}`);
};

const array = [1, 2, 3, 4, 5];

calculateSum(array, printResult);

//2. Write a JavaScript function `loadData` that simulates loading data from an API.
//The function should return a promise that resolves after 2 seconds.

const loadData = (URL) => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      })
      .catch((error) => reject(error));
  });
};

//Example usage:
const URL = "http://localhost:8080/api/v1/movies/tt1630029";
loadData(URL)
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));

//3. Write a JavaScript function `fetchMultipleData` that fetches data from multiple APIs simultaneously using `Promise.all`.
//The function should fetch data from three different APIs and log the results to the console when all requests are complete.

const fetchDataFromDifferentAPIs = (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          } else {
            return response.text();
          }
        })
        .then((data) => resolve(data))
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

fetchDataFromDifferentAPIs(urls)
  .then((contents) => {
    contents.forEach((content, index) => {
      console.log(`Data from API ${index + 1}: ${content}`); //string interpolation
    });
  })
  .catch((error) => console.error(error.message));

//4. We would like to download a shunk file(just a part of the file) specifying
//the start offset and the end offset using aync/await.

const downlaodChunkFile = async (path, name, startOffset, endOffset) => {
  try {
    if (!path || !name) {
      throw new Error("Error! Either path or file name is not specified.");
      return;
    }

    const url = new URL(`downlaod/${name}`, BASE_URL);

    urls.searchParams.append("path", path);

    const response = await fetch(url, {
      method: "GET", // not necessary
      header: {
        Range: `bytes=${startOffset}-${endOffset}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    } else {
      return response.blob();
    }
  } catch (error) {
    console.error(error);
  }
};

const downlaodFile = async (path, name) => {
  try {
    if (!path || !name) {
      throw new Error("Error! Either path or file name is not specified.");
      return;
    }

    const url = new URL(`downlaod/${name}`, BASE_URL);
    urls.searchParams.append("path", path);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    } else {
      return response.blob();
    }
  } catch (error) {
    console.error(error);
  }
};

/*
1.
Write a function fetchUserData that simulates fetching user data from an API. 
The function should return a Promise that resolves with the user data after 2 seconds. 
Chain another Promise that processes the user data (e.g., filters out sensitive information) and 
returns the processed data.
*/
const fetchUserData = (URL) => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      })
      .catch((error) => reject(error));
  });
};

fetchUserData(URL)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

/*
Write a function divideNumbers that takes two numbers as input and returns a Promise that resolves with 
the result of dividing the first number by the second number. Handle the scenario where the second 
number is zero by rejecting the Promise with an error message "Division by zero is not allowed".
*/

const divideNumbers = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    if (arg2 === 0) {
      reject(new Error("Division by zero is not allowed!"));
    } else {
      resolve(arg1 / arg2);
    }
  });
};

const arg1 = 10;
const arg2 = 2;

divideNumbers(arg1, arg2)
  .then((result) => console.log(`${arg1} / ${arg2} = ${result}`))
  .catch((error) => console.error(error.message));
