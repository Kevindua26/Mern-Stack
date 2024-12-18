// function savetoDB(data, success, failure) {
//   let internetConnection = Math.floor(Math.random() * 10) + 1;
//   if (internetConnection > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

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

savetoDB("Kaivalaya Dua");