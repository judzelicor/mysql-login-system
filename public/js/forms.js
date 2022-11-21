class SignupForm {
    constructor() {
        this.form = document.getElementById("signup-form");
        this.signupButton = document.getElementById("signup-button");
        this.userEmailElement = document.getElementById("signup-email");
        this.userEmailConfirmElement = document.getElementById("signup-confirm-email");
        this.userPasswordElement = document.getElementById("signup-password");
        this.userUsernameElement = document.getElementById("signup-username");
        this.userDetails = {
            email: "",
            emailConfirm: "",
            password: "",
            username: ""
        }
    }

    registerUser(event) {
        event.preventDefault();

        if (this.userDetails["email"] &&
            this.userDetails["emailConfirm"] &&
            this.userDetails["password"] &&
            this.userDetails["username"]
        ) {
            axios({
                url: "/signup",
                method: "POST",
                data: this.userDetails
            }).then((response) => {
                console.log(response.data)
            })
        }
    }

    initialize() {
        this.userEmailElement.addEventListener("input", () => {
            this.userDetails["email"] = this.userEmailElement.value;
            
        })
        
        this.userEmailConfirmElement.addEventListener("input", () => {
            this.userDetails["emailConfirm"] = this.userEmailConfirmElement.value;

        })

        this.userPasswordElement.addEventListener("input", () => {
            this.userDetails["password"] = this.userPasswordElement.value;

        })

        this.signupButton.addEventListener("click", (event) => {
            event.preventDefault();

        })

        this.userUsernameElement.addEventListener("input", () => {
            this.userDetails["username"] = this.userUsernameElement.value;

        })

    }
}

class LoginForm {
    constructor() {}

    initialize() {}
}

const signupForm = new SignupForm();

const loginForm = new LoginForm();

signupForm.initialize();

loginForm.initialize()

document.querySelector("#signup-button").addEventListener("click", (event) => {
    signupForm.registerUser(event);

})