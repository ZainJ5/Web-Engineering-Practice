const Form = document.getElementById("Form")
const validatebutton = document.getElementById("validatebutton")
validatebutton.addEventListener('click',function validate(params) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const textarea = document.getElementById("text").value.trim();
    const radio = document.querySelector("input[name='opnion']:checked");
    const dropdown = document.getElementById("dd").value;

    if (!name) {
        alert("Please enter your name!!")
    }
    if (!email) {
        alert("Please enter your email!!")
    }
    if (!textarea) {
        alert("Please enter your textarea!!")
    }
    if (!radio) {
        alert("Please enter your opnion!!")
    }
    if (!dropdown) {
        alert("How did you learn about this website!!")
    }
})