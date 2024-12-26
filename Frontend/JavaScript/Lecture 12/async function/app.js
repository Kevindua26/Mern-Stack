// asyn funciton decleration
async function hello() {
  throw("404 not found");
  return 10;
}

// function call
hello()
  .then((resolve) => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  });

// This is a async in arrow function
let arrowFunciton = async () => {
  return "arrowFunction";
}

console.log(arrowFunciton());