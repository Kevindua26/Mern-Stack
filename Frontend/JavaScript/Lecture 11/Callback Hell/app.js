let h1 = document.querySelector("h1");

function changeColor(color, delay, doNext) {
  setTimeout(() => {
    h1.style.color = color;
    if (doNext) doNext();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000);
  })
})

// Callback Nesting -> Callback Hell
