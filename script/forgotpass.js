const checkemail = (evt) => {
    evt.preventDefault();
    if (email.value === confirmEmail.value) {
        alert('check your email to reset your password');
        console.log('email has been sent successfully');
    } else {
        alert('Email and Confirm Email does not match');
    } 
    evt.target.reset();


}


const form = document.getElementById('resetForm');
form.addEventListener('submit', checkemail);
