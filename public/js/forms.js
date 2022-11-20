class SignupForm {
    constructor() {
        this.form = document.getElementById("signup-form");
        this.signupButton = document.getElementById("signup-button");
        this.userEmailElement = document.getElementById("signup-email");
        this.userEmailConfirmElement = document.getElementById("signup-confirm-email");
        this.userPasswordElement = document.getElementById("signup-password");
        this.userUsernameElement = document.getElementById("signup-username");
        this.userEmail = "";
        this.userEmailConfirm = "";
        this.userPassword = "";
        this.userUsername = "";
    }

    initialize() {
        this.userEmailElement.addEventListener("input", () => {
            this.userEmail = this.userEmailElement.value;
            
        })
        
        this.userEmailConfirmElement.addEventListener("input", () => {
            this.userEmailConfirm = this.userEmailConfirmElement.value;

        })

        this.userPasswordElement.addEventListener("input", () => {
            this.userPassword = this.userPasswordElement.value;

        })

        this.signupButton.addEventListener("click", (event) => {
            event.preventDefault();

        })

        this.userUsernameElement.addEventListener("input", () => {
            this.userUsername = this.userUsernameElement.value;
        })

    }
}

const signupForm = new SignupForm();

signupForm.initialize();

document.querySelector("button").addEventListener("click", () => {
    console.log(signupForm.userEmail, signupForm.userEmailConfirm, signupForm.userPassword, signupForm.userUsername)
})