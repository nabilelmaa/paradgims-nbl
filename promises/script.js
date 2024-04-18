const gradeCalculator = (grades) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(grades)) {
      reject("This is not an array!");
    } else {
      const grade = grades.reduce((prev, next) => {
        return prev + next;
      });
      resolve(grade / grades.length);
    }
  });
};

const grades = [100, 99, 85, 55];

gradeCalculator(grades)
  .then((result) => {
    return result;
  })
  .then((grade) => {
    console.log(`Overall grade: ${grade}`);
  })
  .catch((err) => console.error({ message: err }));
