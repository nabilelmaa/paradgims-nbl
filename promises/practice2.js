//🔥 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
const executeFunction = (callback) => {
  setTimeout(callback, 2000);
};

const invokeCallback = () => {
  console.log("Invoked after 2 seconds.");
};

executeFunction(invokeCallback);
//🙂 2. Write a JavaScript program that converts a callback-based function to a Promise-based function.

const callbackBasedFunction = (arg1, arg2, callback) => {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 === 0) {
      callback(null, result);
    } else {
      callback(new Error("The result is NO even!"), null);
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

// Example usage:
const arg1 = 7;
const arg2 = 3;
promiseBasedFunction(arg1, arg2)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

//🤣 3. Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
const fetchData = (URL) => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new `HTTP error! Status: ${response.status}`();
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

const URL = "http://localhost:8080/api/v1/movies/all";

// fetchData(URL)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));
//🚀 4. Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
const downloadURLs = (urls) => {
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
        .then((content) => resolve(content))
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

downloadURLs(urls)
  .then((contents) => {
    contents.forEach((content, index) => {
      console.log(`Content of URL No. ${index + 1}: ${content}`);
    });
  })
  .catch((error) => console.log(error.message));

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
        reject(new Error("Provide two number please!"));
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
    console.log(error);
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
//Obserever Vs. Observable

//🙁 6. Consider an application that requires data from two different APIs to render a webpage. How would you use Promises to ensure that the page does not render until both API calls have completed?

const fetchDataFromAPI1 = (url1) => {
  return new Promise((resolve, reject) => {
    fetch(url1)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error!${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const fetchDataFromAPI2 = (url2) => {
  return new Promise((resolve, reject) => {
    fetch(url2)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error!${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const performAsyncOperations_ = async (url1, url2) => {
  try {
    const [response1, response2] = await Promise.all([
      fetchDataFromAPI1(url1),
      fetchDataFromAPI2(url2),
    ]);
    return [response1, response2];
  } catch (err) {
    console.error(err);
  }
};

performAsyncOperations_(url1, url2)
  .then((responses) => {
    const [responsePromise1, responsePromise2] = responses;
    console.log(responsePromise1);
    console.log(responsePromise2);
  })
  .catch((error) => console.error(error.message));

/*
 */

getUser(1234)
  .then((user) => {
    console.log(user);
    return getService(user.id);
  })
  .then((service) => {
    console.log(service);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
    (values) => {
      values.forEach((value, index) => {
        console.log(`Promise ${index + 1}: ${value}`);
      });
    };
  })
  .catch((error) => {
    console.log(error);
  });

const getUser = (userId) => {
  return Promise.resolve({ id: userId });
};

const getService = (userId) => {
  return Promise.resolve(["Email", "VPN"]);
};

function downloadChunks(urls, n, cs) {
  let chunks = []; // not real chunks

  for (let i = 0; i < n; ++i) {
    soop
      .createClient(urls[i])
      .then((fx) => {
        fx.downloadChunk(fx, cs * i, cs * (i+1));
      })
      .then((chunk) => {
        chunks.push(chunk);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}



async function downloadChunks(urls, n, cs) {
  try {
    const chunks = []; // Array to store downloaded chunks

    for (let i = 0; i < n; ++i) {
      const client = await soop.createClient(urls[i]); // Create client asynchronously
      const chunk = await client.downloadChunk(client, cs * i, cs + 1); // Download chunk asynchronously
      chunks.push(chunk); // Append downloaded chunk to the array
    }

    return chunks; // Return the array of downloaded chunks
  } catch (error) {
    console.error("Error downloading chunks:", error); // Handle errors
    throw error; // Propagate the error
  }
}
