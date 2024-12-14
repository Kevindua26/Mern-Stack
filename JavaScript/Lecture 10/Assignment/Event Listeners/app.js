const mouseout = document.querySelector('#mouseout');

mouseout.addEventListener('mouseout', function() {
    // mouseout used when mouse cursor leaves the element
    console.log("Mouse Out"); 
});

const keypress = document.querySelector('#keypress');

keypress.addEventListener('keypress', function() {
    // keypress used when any key is pressed
    console.log("Key Press");
});

const scroll = document.querySelector('#scroll');

scroll.addEventListener('scroll', function() {
    // scroll used when scrolling
    console.log("Scroll");
});

const load = document.querySelector('#load');

load.addEventListener('load', function() {
    // load used when page is loaded
    console.log("Page is fully loaded");
    alert("Page is fully loaded");
});