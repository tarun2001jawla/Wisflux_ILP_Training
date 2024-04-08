// Creating a new promise that resolves after a 3-second delay
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Inside a Promise");

    resolve(); // Resolving the promise
  }, 3000);
});

promiseOne
  .then(function () {
    console.log("Promise is resolved successfully!");
  })
  .catch(function () {
    console.log("Error in the Promise ");
  });

// Another way of writing Promises
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Inside a Second Promise");
    resolve();
  }, 1000);
})
  .then(function () {
    console.log("Second Promise is also resolved Successfully!");
  })
  .catch(function (error) {
    console.log("An error occurred: " + error);
  });

// Creating a new promise that resolves after a 0.5-second delay with an object containing a name and email
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "tarunjawla", email: "tarunjawla2@gmail.com" });
  }, 500);
});

promiseThree.then(function (value) {
  console.log("The object returned from resolve is", value);
});

// Creating a new promise that resolves after a 2-second delay with an object containing a message and user object
// Also includes a catch block to handle any errors and a finally block that always executes
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        msg: "Data Loaded Successfully",
        user: { username: "James", email: "jaes123@gmail.com" },
      });
    } else {
      reject("Data not loaded");
    }
  }, 2000);
});

promiseFour
  .then(function (result) {
    console.log("Promise Four Resolved", result.msg, result.user);
  })
  .catch(function (error) {
    console.log("Error occurred in Promise four ", error);
  })
  .finally(() =>
    console.log("This block will always execute whether or not an error occurs")
  );

// Creating a new promise that resolves after a 2-second delay with an object containing a username, email, and age
// Also includes an async function to handle the promise and log the user details
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "john_doe",
        email: "john@example.com",
        age: 25,
      });
    } else {
      reject("An error has occurred!");
    }
  }, 2000);
});

async function handlePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(`User details ${res.username}, ${res.email}, Age :${res.age}`);
  } catch (error) {
    console.log(error);
  }
}

handlePromiseFive();
