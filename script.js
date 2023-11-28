const submitButton = document.querySelector("#submit");
submitButton.disabled = true;

function validatePassword() {
    const password1 = document.querySelector('#pass').value;
    const password2 = document.querySelector('#confirm').value;
    const errorMessage = document.querySelector('#error-message');
    if (password1 !== password2) {
        errorMessage.textContent = "Passwords do not match!";
        submitButton.disabled = true;
    } else {
        errorMessage.textContent = "";
        submitButton.disabled = false;
    }
}

const passwordInput = document.querySelector('#pass');
const passwordInputConfirm = document.querySelector('#confirm');
passwordInput.addEventListener("input", validatePassword);
passwordInputConfirm.addEventListener("input", validatePassword);