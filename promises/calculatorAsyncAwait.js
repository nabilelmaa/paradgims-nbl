const maximumAndSumOfArray = (array) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error("The input in NOT an array!"));
    } else {
      let max = array.reduce((current, accumulator) => {
        return Math.max(current, accumulator);
      });

      let sum = array.reduce((current, accumulator) => {
        return current + accumulator;
      });
      resolve([max, sum]);
    }
  });
};

// const array = [1, 2, 3, 4, 5];
// maximumAndSumOfArray(array)
//   .then((results) => {
//     const [max, sum] = results;
//     console.log(`The max value of the array is: ${max}`);
//     console.log(`The sum of the array is: ${sum}`);
//   })
//   .catch((error) => console.error(error.message));

const URL = "https://animechan.xyz/api/random/anime?title=naruto";
const fetchData1 = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
};

const fetchData2 = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
