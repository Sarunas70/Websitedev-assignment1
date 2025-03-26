const login = (evt) => {
    evt.preventDefault();
    const usernameInput = loginForm.elements.loginUsername.value;
    const passwordInput = loginForm.elements.loginPassword.value;

    console.log("Username Input:", usernameInput);
    console.log("Password Input:", passwordInput);

    
    const storedDetails = JSON.parse(localStorage.getItem('Details')) || [];
    console.log("Stored Details:", storedDetails);

    
    const isValidUser = storedDetails.some(user => user.username === usernameInput && user.password === passwordInput);
    console.log("Is Valid User:", isValidUser);

    if (isValidUser) {
        alert("Login Successful!");
        window.location.href = "index.html";
        
        
    } else {
        alert("Invalid username or password. Please try again.");
    }
};

// Assuming you have a form with an id of 'loginForm'
const form = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);