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

function login(callback) {
  console.log("Logging in...");

  setTimeout(() => {
    console.log("Logged in successfully!");
    callback();
  }, 5000);
}

function getUser(callback) {
  console.log("Getting user data...");

  setTimeout(() => {
    console.log("User details loaded");
    callback();
  }, 2000);
}

function getUserPosts(callback){
  console.log("Getting user posts...");

  setTimeout(() => {
    console.log("User posts loaded");
    callback();
  }, 2000);
}