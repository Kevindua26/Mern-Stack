const btn = document.querySelector('button');

btn.onclick = function() {
    console.log("Button clicked!");
    alert("Button clicked!");
}

const btn1 = document.getElementById('btn1');

btn1.onmouseenter = function () {
    console.log("Mouse entered!");
}