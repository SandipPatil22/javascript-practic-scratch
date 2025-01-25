// *******************************************Promises*****************************************************************

// promise is an object representing the eventual completion or failuar of an asynchronous operation and its resulting value.

// eg.1
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulating success or failure
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((result) => {
    console.log(result); // "Promise resolved successfully!"
  })
  .catch((error) => {
    console.error(error); // "Promise rejected!"
  })
  .finally(() => {
    console.log("Promise processing complete.");
  });

// eg.2

const task1 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("task 1 is completed"), 1000)
  );
const task2 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("task 2 is completed"), 3000)
  );
const task3 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("task 3 is completed"), 2000)
  );

Promise.all([task1(), task2(), task3()])
  .then((result) => console.log("All task Completed :", result))
  .catch((error) => console.log("Error : ", error));
