const inp = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', function(e) {
  e.preventDefault();

  let item = document.createElement('li');
  item.innerText = inp.value;

  let delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.classList.add('delete');

  if (inp.value == "") {
    alert("Please enter a task");
  } else {
    item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
  }
});

ul.addEventListener('click', function(e) {
  if(e.target.nodeName === 'BUTTON') {
    e.target.parentElement.remove();
    console.log("deleted");
  }
});
