let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let user= this.elements[0]; // this refers to the form
    let pass= this.elements[1]; // this refers to the form
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is ${pass.value}`);
});