const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = "green";

    console.log("Button is clicked");
    console.log("Color is green now");

    setTimeout(() => {
        btn.style.backgroundColor = "#f0f0f0";
    }, 2000);
});