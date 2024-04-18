const allPromises = Promise.all([promise1, promise2]);

allPromises
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });


