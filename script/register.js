let StoredDetails = localStorage.getItem('Details') ? JSON.parse(localStorage.getItem('Details')) : [];


const UserDetails = (evt) => {
    evt.preventDefault();
    const regDetails = {
        name: Details.elements.Name.value,
        username: Details.elements.Username.value,
        email: Details.elements.Email.value,
        password: Details.elements.Password.value,
        confirmPassword: Details.elements.ConfirmPassword.value,
        address: Details.elements.Address.value,
        city: Details.elements.City.value,
        postalCode: Details.elements.PostalCode.value,
        phone: Details.elements.Phone.value,
    };
    StoredDetails.push(regDetails);
    localStorage.setItem('Details', JSON.stringify(StoredDetails));
    Details.reset();
    console.log(StoredDetails);
    alert("Registration Successful!");
    window.location.href = "login.html";
}

const Details = document.getElementById("Details");
Details.addEventListener("submit", UserDetails);