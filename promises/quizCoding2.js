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

//   fetchUserData(URL)
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));

/*
  Write a function divideNumbers that takes two numbers as input and returns a Promise that resolves with 
  the result of dividing the first number by the second number. Handle the scenario where the second 
  number is zero by rejecting the Promise with an error message "Division by zero is not allowed".
  */

const divideNumbers = (arg1, arg2) => {
  return new Promise((resolve, reject) => {
    if (isNaN(arg1) || isNaN(arg2)) {
      reject(new Error("Both arguments must be numbers!"));
    } else if (arg2 === 0) {
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

/*
Write a function fetchDataFromMultipleEndpoints that takes an array of endpoint URLs as input and returns a Promise 
that resolves with an array of data fetched from all the endpoints.
*/
const urls = [
  "localhost:8080/api/v1/movies",
  "localhost:9090/api/v1/movies",
  "localhost:1010/api/v1/movies",
];

const fetchDataFromMultipleEndpoints = (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          } else {
            return response.text();
          }
        })
        .then((data) => {
          setTimeout(() => resolve(data), 2000);
        })
        .catch((error) => reject(error));
    });
  });
  return Promise.all(promises);
};

// fetchDataFromMultipleEndpoints(urls)
//   .then((contents) => {
//     contents.forEach((content, index) => {
//       console.log(`Data from URL No. ${index + 1}: ${content}`);
//     });
//   })
//   .catch((err) => console.error(err.message));

const sortArray = (array) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject("The input is not an array!");
    } else {
      resolve(array.slice().sort((a, b) => a - b)); // using slice() to create a copy of the original array before reversing it.
    }
  });
};

const array = [3, 4, 1, 5, 2];
sortArray(array)
  .then((result) =>
    console.log(`Original array: [${array}] \nSorted array: [${result}]`)
  )
  .catch((error) => console.error(error.message));

const reverseArray = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("The input is not an array!");
    } else {
      resolve(arr.slice().reverse());
    }
  });
};

// const arr = [1, 2, 3, 4, 5];

// reverseArray(arr)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message));

function dChunk() {
  let chunks = [];
  for (let i = 0; i < n; ++i) {
    soop
      .createClient(utls[i])
      .then((fx) => {
        fx.dowloadChunk(fx, cd * i, cs * i + 1);
      })
      .then((chunk) => chunks.push(chunk))
      .catch((err) => console.error(err.message));
  }
}

const fetchUserDataWithTimeout = (URL) => {
  let controller = new AbortController();
  let signal = controller.signal;

  setTimeout(() => {
    controller.abort();
  }, timeout);
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

const fetchDataWithTimeout = async (url, timeout) => {
  const fetchDataPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, timeout);
  });

  try {
    const response = await Promise.race([fetchDataPromise, timeoutPromise]);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error; // Re-throw any errors
  }
};

// Example usage:
const url = "https://api.example.com/data";
const timeout = 5000; // Timeout in milliseconds (e.g., 5 seconds)

fetchDataWithTimeout(url, timeout)
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

const fetchM = async (url, timeout) => {
  try {
    const fetchData = fetch(url);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Operation timed out"));
      }, timeout);
    });
  } catch (err) {
    console.error(err.message);
  }
};

fetch(url)
  .then((response) => {
    return response.json(); // Convert the response to text
  })
  .then((jsn) => {
    return jsn.text();
  })
  .then((jsn) => {
    console.log(jsn);
  })
  .catch((error) => {
    console.error(error); // Handle any errors
  });


const fs = require('fs');
// Function to open a file and return a promise
function topen(path) {
  return new Promise((resolve, reject) => {
    fs.open(path, 'r', (err, fd) => {
      if (err) reject(err);
      else resolve(fd);
    });
  });
}

// Function to read the content of a file descriptor and return a promise
function fread(fd) {
  return new Promise((resolve, reject) => {
    const bufferSize = 1024; // You can adjust this buffer size according to your needs
    let buffer = Buffer.alloc(bufferSize);

    fs.read(fd, buffer, 0, bufferSize, 0, (err, bytesRead, buffer) => {
      if (err) reject(err);
      else resolve({ bytesRead, buffer });
    });
  });
}

// Function to write content to a file descriptor and return a promise
function fwrite(fd, buffer) {
  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, 0, buffer.length, 0, (err, written, buffer) => {
      if (err) reject(err);
      else resolve(written);
    });
  });
}

// Main function to copy file content
async function copyFile() {
  try {
    const originalFd = await topen('original.txt');
    const copyFd = await topen('copy.txt');

    let bytesRead;
    let buffer;
    do {
      // Read from original file
      ({ bytesRead, buffer } = await fread(originalFd));

      // Write to copy file
      await fwrite(copyFd, buffer.slice(0, bytesRead));
    } while (bytesRead > 0);

    // Close files
    fs.close(originalFd, (err) => {
      if (err) console.error('Error closing original file:', err);
    });
    fs.close(copyFd, (err) => {
      if (err) console.error('Error closing copy file:', err);
    });

    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the main function to start the copy process
copyFile();

//Implementaion: 2 

const fs = require('fs');

// Define the paths for original and copy files
const originalFilePath = 'original.txt';
const copyFilePath = 'copy.txt';

// Function to open a file and return a promise on the opened file descriptor
const topen = (path) => {
  return new Promise((resolve, reject) => {
    fs.open(path, 'r', (err, fd) => {
      if (err) {
        reject(err);
      } else {
        resolve(fd);
      }
    });
  });
};

// Function to read from a file descriptor and return a promise on the read bytes
const fread = (fd) => {
  return new Promise((resolve, reject) => {
    const buffer = Buffer.alloc(1024); // Allocate buffer to read bytes
    fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.slice(0, bytesRead)); // Return only the bytes read
      }
    });
  });
};

// Function to write bytes to a file descriptor asynchronously
const write = (fd, bytes) => {
  return new Promise((resolve, reject) => {
    fs.write(fd, bytes, 0, bytes.length, null, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Copy the content of original.txt to copy.txt using async/await
async function copyFile() {
  try {
    // Open original.txt for reading
    const originalFd = await topen(originalFilePath);
    
    // Open copy.txt for writing
    const copyFd = await topen(copyFilePath);
    
    // Read bytes from original.txt
    const bytes = await fread(originalFd);
    
    // Write bytes to copy.txt
    await write(copyFd, bytes);
    
    // Close both file descriptors
    fs.close(originalFd, () => {});
    fs.close(copyFd, () => {});
    
    console.log('File copied successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to copy the file
copyFile();
