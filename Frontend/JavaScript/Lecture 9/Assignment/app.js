const body = document.querySelector('body');
const h1 = document.createElement('h1');

body.style.fontFamily = "Arial, sans-serif";
h1.innerText = "DOM Practice";
h1.style.marginLeft = "20px";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

body.appendChild(h1);

const input = document.createElement('input');
const btn = document.createElement('button');

input.id = "input";
input.type = "text";
input.placeholder = "username";
input.style.marginLeft = "20px";

btn.id = "input";
btn.id = "btn";
btn.innerText = "Click Me";

body.appendChild(input);
body.appendChild(btn);

const accbtn = document.querySelector("#btn");

accbtn.style.backgroundColor = "blue";
accbtn.style.color = "white";

const p = document.createElement('p');

p.innerHTML = "Apna College <b>Delta</b> Practice"
p.style.marginLeft = "20px";

body.appendChild(p);