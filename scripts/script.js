function validateForm() {
    const form = document.forms["contactForm"];
    const name = form["name"].value;
    const surname = form["surname"].value;
    const tel = form["tel"].value;
    const email = form["email"].value;
    if (name === "" || email === "" || surname === "" || tel === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', function () {
            if (validateForm()) {
                button.textContent = 'Form Submitted';
                button.classList.add('submitted');
            }
        });
    }
});
