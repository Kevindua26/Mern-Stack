const div = document.querySelector('div');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');

div.addEventListener('click', () => {
  console.log('DIV clicked');
});

ul.addEventListener('click', (e) => {
  e.stopPropagation(); // used to stop the event bubbling up to the parent elements
  console.log('UL clicked');
});

for (li of lis) {
  li.addEventListener('click', (e) => {
    e.stopPropagation(); // used to stop the event bubbling up to the parent elements
    console.log('LI clicked');
  });
}