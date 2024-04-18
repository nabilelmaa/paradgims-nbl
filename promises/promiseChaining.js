// Function to simulate an asynchronous operation that returns a Promise
const asyncOperation = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message.toUpperCase()); // Resolve with the message in uppercase
    }, delay);
  });
};

// Chain multiple asynchronous operations together
// asyncOperation("First operation", 1000)
//   .then((result1) => {
//     console.log(result1);
//     return asyncOperation("Second operation", 1500); // Return a new Promise for chaining
//   })
//   .then((result2) => {
//     console.log(result2);
//     return asyncOperation("Third operation", 2000); // Return a new Promise for chaining
//   })
//   .then((result3) => {
//     console.log(result3);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });
//-----------------

const asyncOp = (message) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(message.toUpperCase())
        }, 1000)
    }) 
}

asyncOp("First operation")
    .then((result) => {
        console.log(result);
        return asyncOp("Second operation");
    })
    .then((result) => {
        console.log(result);
        return asyncOp("Third operation");
    })
    .then((result) => {
        console.log(result);
    })
