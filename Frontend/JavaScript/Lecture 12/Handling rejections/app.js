let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNo = Math.floor(Math.random() * 5) + 1;
      if (randomNo > 3) {
        reject("Error occured");
      }
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
  try{
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
  } catch(err) {
    console.log("Error detected: ", err);
  }
  let a = 10;
  console.log(`a = ${a}`);
  console.log("a + 10 = ", a + 10);
} 

call();