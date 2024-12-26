// Get references to the input field and heading
const input = document.getElementById('nameInput');
const heading = document.getElementById('displayName');

// Add an event listener to the input field
input.addEventListener('input', function () {
    // Remove any character that is not a letter or space
    const filteredValue = input.value.replace(/[^a-zA-Z ]/g, '');

    // Update the input field with the cleaned value
    input.value = filteredValue;

    // Show the cleaned value in the heading or default text if empty
    if (filteredValue === '') {
        heading.textContent = "Your name will appear here";
    } else {
        heading.textContent = filteredValue;
    }
});