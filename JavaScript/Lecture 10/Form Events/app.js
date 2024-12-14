const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stops the page from routing to another page
    console.log('Form Submitted');
    alert('Form Submitted');
});