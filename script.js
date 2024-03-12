const form = document.querySelector("form")
const passwordInput = document.getElementById("password")
const passToggleBtn = document.getElementById("pass-toggle-btn")



const showError = (field, errorText) => {           //showError(userinput, 'message')
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
};


const handleFormData = (e) => {
    e.preventDefault();
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");


    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".form input .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll("error-text").forEach(errorText => errorText.remove());

    if (fullname === ''){
        showError(fullnameInput, "Enter your full name");
    }

    if (!emailPattern.test(email)){
        showError(emailInput, "Enter a valid email address");
    }

    if (password === ''){
        showError(passwordInput, "Enter your password");
    }

    if (date === ''){
        showError(dateInput, "Select your date of birth")
    }

    if(gender === ''){
        showError(genderInput, "Select your gender")
    }

    const errorInput = document.querySelectorAll(".form-group .error");
    if (errorInput.length > 0) return;

    form.submit();
    
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
// Handling form submission event
form.addEventListener("submit", handleFormData);