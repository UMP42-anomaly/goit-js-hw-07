const form = document.querySelector(".login-form");

const user = {};

form.addEventListener("submit", event => {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") { 
        alert('All form fields must be filled in');
    } else {
        user.email = email.trim();
        user.password = password.trim();
        console.log(user);
        form.reset();
    };
});