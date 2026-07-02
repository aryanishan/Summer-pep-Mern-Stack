// A promise in javascript is an object that represent the eventual completion or failure of an asynchronous operation and its result value.
// It acts as a placeholder for a value which isn't available yet but will be available (resolved or rejected) at some point of time in future. 
const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

promise.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  console.log("Operation completed.");
})

function login() {
  return new Promise((resolve, reject) => {
    console.log("Logging in...");

    setTimeout(() => {
      console.log("Logged in successfully!");
      resolve();
    }, 5000);
  });
}

function getUser() {
  return new Promise((resolve, reject) => {
    console.log("Getting user data...");

    setTimeout(() => {
      console.log("User details loaded");
      resolve();
    }, 2000);
  });
}

function getUserPosts() {
  return new Promise((resolve, reject) => {
    console.log("Getting user posts...");

    setTimeout(() => {
      console.log("User posts loaded");
      resolve();
    }, 2000);
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    console.log("Getting user orders...");

    setTimeout(() => {
      console.log("User orders loaded");
      resolve();
    }, 1000);
  });
}

function getOrderDetails() {
  return new Promise((resolve, reject) => {
    console.log("Getting order details...");

    setTimeout(() => {
      console.log("User order details loaded");
      resolve();
    }, 3000);
  });
}

login()
  .then(getUser)
  .then(getUserPosts)
  .then(getOrders)
  .then(getOrderDetails)
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Operation completed.");
  });