// add event listener
const validPin = 1234;

const addMoneyButton = document.getElementById("btn-add");
addMoneyButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    // get all four input value
    const bankName = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-acc").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPinNumber = parseInt(document.getElementById("add-pin").value);

    // get main amount
    const mainAmount = parseInt(document.getElementById("main-amount").innerText);
    
    // validation 
    if(bankName === "Select bank") {
        alert("Please select a bank.");
        return;
    }
    else if(accountNumber.length <11) {
        alert("Please enter valid account number.");
        return;
    }
    else if(isNaN(addAmount)) {
        alert("Please enter amount.");
        return;
    }
    else if(addPinNumber !== validPin) {
        alert("Please enter correct pin number.");
        return;
    }

    // add (add amount + main ammount)
    const finalAmount = mainAmount + addAmount;

    // set finalAmount to the main amount 
    document.getElementById("main-amount").innerText = finalAmount;

    // reset all input value 
    document.getElementById("add-acc").value ="";
    document.getElementById("add-amount").value ="";
    document.getElementById("add-pin").value ="";
    
})

// log out button handle 
document.getElementById("btn-logout")
    .addEventListener("click", function () {
        window.location.href = "./index.html";
    })