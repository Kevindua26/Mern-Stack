function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetConnection = Math.floor(Math.random() * 10) + 1;
    if (internetConnection > 4) {
      resolve("success: data is saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// Promise chaining
// savetoDB("Kaivalaya Dua")
// .then(() => {
//   console.log("1st Data Saved");
//   return savetoDB("It's Kevin");
// })
// .then(() => {
//   console.log("2nd Data Saved");
//   return savetoDB("NotKevin");
// })
// .then(() => {
//   console.log("3rd Data Saved");
// })
// .catch(() => {
//   console.log("Data Not Saved");
// })

// results & errors in promises
savetoDB("Kaivalaya Dua")
.then((result) => {
  console.log("1st Data Saved");
  console.log("Result of promise", result);
  return savetoDB("It's Kevin");
})
.then((result) => {
  console.log("2nd Data Saved");
  console.log("Result of promise", result);
  return savetoDB("NotKevin");
})
.then((result) => {
  console.log("3rd Data Saved");
  console.log("Result of promise", result);
})
.catch((error) => {
  console.log("Data Not Saved");
  console.log("Result of error", error);
})