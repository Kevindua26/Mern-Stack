let input = document.querySelector('input');
let button = document.querySelector('button');

function keyboardEventDetails(event) {
    console.log("Event: ", event);
    console.log("Key: ", event.key);
    console.log("Code: ", event.code);
}

input.addEventListener('keydown', keyboardEventDetails);
input.addEventListener('keyup', keyboardEventDetails);

button.addEventListener('click', function(event) {
    console.log("Event: ", event);
    console.log("Button is Clicked");
});

let inputwasd = document.querySelector('input[name="wasd"]');
let buttonwasd = document.querySelector('button[name="wasd"]');

inputwasd.addEventListener("keydown", function(event) {
    if (event.code == 'KeyW' || event.code == 'Keyw') {
        console.log("Key: ", event.key);
        console.log("Move Forward.");
    } else if (event.code == 'KeyA' || event.code == 'Keya') {
        console.log("Key: ", event.key);
        console.log("Move Left.");
    } else if (event.code == 'KeyS' || event.code == 'Keys') {
        console.log("Key: ", event.key);
        console.log("Move Backward.");
    } else if (event.code == 'KeyD' || event.code == 'Keyd') {
        console.log("Key: ", event.key);
        console.log("Move Right.");
    }
});

buttonwasd.addEventListener('click', function(event) {
    console.log("Event: ", event);
    console.log("Button is Clicked");
});