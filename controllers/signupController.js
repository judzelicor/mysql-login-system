function renderSignupPage(request, response) {
    response.render("signup");
};

function registerUser(request, response) {

    response.status(200).json({userDetails: request.body});
}

export { 
    renderSignupPage,
    registerUser
};