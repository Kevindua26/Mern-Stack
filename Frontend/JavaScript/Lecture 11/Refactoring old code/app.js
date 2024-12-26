let h1 = document.querySelector("h1");

function changeColor(color, delay, doNext) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed");
    }, delay);
  });
}

changeColor("red", 1000)
.then(() => {
  console.log("Red color done");
  return changeColor("blue", 1000);
})
.then(() => {
  console.log("Blue color done");
  return changeColor("green", 1000);
})  
.then(() => {
  console.log("Green color done");
})
// There's very less chances for the catch block to run as the code is note that complex
.catch(() => { 
  console.log("Error");
})



// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("green", 1000);
//   })
// })
