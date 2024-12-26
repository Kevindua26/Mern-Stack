// savetoDB(
//   "Kaivalaya Dua", 
//   () => {
//     console.log("Success");
//     savetoDB(
//       "It's Kevin", 
//       () => {
//         console.log("Success");
//         savetoDB(
//           "NotKevin", 
//           () => {
//             console.log("Success");
//           }, 
//           () => {
//             console.log("Failure");
//           })
//       }, 
//       () => {
//         console.log("Failure");
//       })
//   }, 
//   () => {
//   console.log("Failure");
//   }
// )

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
savetoDB("Kaivalaya Dua")
.then(() => {
  console.log("1st Data Saved");
  return savetoDB("It's Kevin");
})
.then(() => {
  console.log("2nd Data Saved");
  return savetoDB("NotKevin");
})
.then(() => {
  console.log("3rd Data Saved");
})
.catch(() => {
  console.log("Data Not Saved");
})