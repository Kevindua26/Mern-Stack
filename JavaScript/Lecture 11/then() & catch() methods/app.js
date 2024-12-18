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

// let request = savetoDB("Kaivalaya Dua"); // request is a promise object
// request.then(() => {
//   console.log("premise was resolved");
//   console.log(request);
// })
// .catch(() => {
//   console.log("premise was rejected");
//   console.log(request);
// })

// Updated syntax
savetoDB("Kaivalaya Dua")
.then(() => {
  console.log("premise was resolved");
})
.catch(() => {
  console.log("premise was rejected");
})