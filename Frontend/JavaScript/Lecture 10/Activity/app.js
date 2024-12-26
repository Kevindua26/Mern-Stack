let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    //h1 text
    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    //div background color
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;

    //copy to clipboard
    navigator.clipboard.writeText(randomColor)
    .then(() => {
        console.log("RGB value copied to clipboard: " + randomColor);
    })
    .catch(err => {
        console.error("Failed to copy RGB value: ", err);
    });

    console.log(randomColor);
});

function getRandomColor() {
    //generate random color
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}