let input = document.querySelector('#text');
let p = document.querySelector('p');

input.addEventListener('input', function() {
    console.log(this.value);
    p.innerText = this.value;
});