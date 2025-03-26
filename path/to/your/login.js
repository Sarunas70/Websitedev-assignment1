const login = (evt) => {
    evt.preventDefault();
    const usernameInput = loginForm.elements.Username.value;
    const passwordInput = loginForm.elements.Password.value;

    // Retrieve stored user details from local storage
    const storedDetails = JSON.parse(localStorage.getItem('Details')) || [];

    // Check if any stored user details match the input
    const isValidUser = storedDetails.some(user => user.username === usernameInput && user.password === passwordInput);

    if (isValidUser) {
        alert("Login Successful!");
        // Redirect to a different page after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
};

// Assuming you have a form with an id of 'loginForm'
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);