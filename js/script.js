// addEventListener in the login button 
const loginButton = document.getElementById("btn-login");
loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    // set demo id pass
    const mobileNumber = 01234567891;
    const pinNumber = 1234;

    // get input mobile number and converted into integer
    const inputMobileNumber = document.getElementById("mobile-number").value;
    const inputMobileNumberInt = parseInt(inputMobileNumber);

    // get input pin number and converted into integer
    const inputPinNumber = document.getElementById("pin-number").value;
    const inputPinNumberInt = parseInt(inputPinNumber);
    
    // check condition
    if(inputMobileNumberInt === mobileNumber && inputPinNumberInt === pinNumber) {
        window.location.href = "./home.html";
    } else {
        alert("Incorrect Mobile number or Pin number");
    }
})