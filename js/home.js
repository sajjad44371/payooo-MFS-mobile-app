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
  if (bankName === "Select bank") {
    alert("Please select a bank.");
    return;
  } else if (accountNumber.length < 11) {
    alert("Please enter valid account number.");
    return;
  } else if (isNaN(addAmount)) {
    alert("Please enter amount.");
    return;
  } else if (addPinNumber !== validPin) {
    alert("Please enter correct pin number.");
    return;
  }

  // add (add amount + main ammount)
  const finalAmount = mainAmount + addAmount;

  // set finalAmount to the main amount
  document.getElementById("main-amount").innerText = finalAmount;

  // reset all input value
  document.getElementById("add-acc").value = "";
  document.getElementById("add-amount").value = "";
  document.getElementById("add-pin").value = "";
});

// log out button handle
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// cashout handle
const cashOut = document.getElementById("cashout");
cashOut.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("cashout-sec").style.display = "block";
  }

  const withdrawBtn = document.getElementById("btn-withdraw");
  withdrawBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("cashout-agent").value;
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const mainAmount = parseInt(
      document.getElementById("main-amount").innerText
    );

    // validation
    if (agentNumber.length < 11) {
      alert("Please enter valid agent account.");
      return;
    } else if (isNaN(withdrawAmount)) {
      alert("Please enter your amount.");
      return;
    } else if (withdrawPin !== validPin) {
      alert("Please enter correct pin number.");
      return;
    }

    if (mainAmount < withdrawAmount) {
      alert("You haven't enough money to withdraw");
    } else {
      const finalAmount = mainAmount - withdrawAmount;
      document.getElementById("main-amount").innerText = finalAmount;
    }

    document.getElementById("cashout-agent").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("withdraw-pin").value = "";
  });
});
