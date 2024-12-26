let url = "https://catfact.ninja/fact";

// This is the fetch request.
fetch(url)
.then((res1) => {
  console.log("Response: ", res1);
  return res1.json();
})
.then((data) => {
  console.log("Data 1: ", data.fact);
  return fetch(url);
})
.then((res2) => {
  console.log("Response: ", res2);
  return res2.json();
})
.then((data2) => {
  console.log("Data 2: ", data2.fact);
})
.catch((err) => {
  console.log("Error: ", err);
})

/*
  // Asynchronous Working

  Here you can see how asynchronously the data is being fetched from the API.
  The first fetch request is made and then the second fetch request is made.
  And the console.log() below the fetch request is executed before the fetch request is completed.
*/

console.log("This is the my first API request.");