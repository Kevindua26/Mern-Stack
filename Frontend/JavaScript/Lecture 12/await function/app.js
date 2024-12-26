let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`Color changed to ${color}`);
      resolve("Color changed");
    }, delay);
  });
}

// callback hell
/*
  changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
      changeColor("green", 1000);
    })
  })
*/

/*
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
*/    

async function call() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
} 

call();