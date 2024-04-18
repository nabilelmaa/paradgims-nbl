const axiosRequest = require("axios");

axiosRequest
  .get("https://www.boredapi.com/api/activity/")
  .then((response) => {
    console.log(`You could ${response.data.activity}`);
  })
  .catch((error) => console.error(error));

// const grades = [90, 80, 77, 100, 95];

// const totalGrade = grades.reduce((prev, next) => {
//   return prev + next;
// });

// const averageGrade = totalGrade / grades.length;

// console.log(`The total grade is ${averageGrade}`);

// const calculateGrade = (myGrades) => {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(myGrades)) {
//       reject("The argument is not an array");
//     } else {
//       const sum = (prev, next) => {
//         return prev + next;
//       };
//       const totalGrade = myGrades.reduce(sum);
//       resolve(totalGrade / myGrades.length);
//     }
//   });
// };

// const getMaximumGrade = (myGrades) => {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(myGrades)) {
//       reject("The argument is not an array");
//     } else {
//       const getMax = (prev, next) => {
//         return Math.max(prev, next);
//       };
//       const maxGrade = myGrades.reduce(getMax);
//       resolve(maxGrade);
//     }
//   });
// };

// const myGrades = [90, 80, 77, 99.5, 95, 99];

// calculateGrade(myGrades)
//   .then((result) => {
//     console.log(`Your grade is ${result.toFixed(2)}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   getMaximumGrade(myGrades)
//   .then((result) => {
//     console.log(`The maximum grade is ${result.toFixed(2)}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

