const h1 = document.querySelector('h1');
const p = document.querySelector('p');

h1.addEventListener('click', function() {
    console.log("H1 clicked!");
    alert("H1 clicked!");
});

p.addEventListener("dblclick", function() {
    console.log("P double clicked!");
    alert("P double clicked!");
});