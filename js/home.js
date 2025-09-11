// log out button handle
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

const validPin = 1234;
const transactionsData = [];

// add
const add = document.getElementById("add");
add.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("add-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("add")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("add")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
  }

  const addMoneyButton = document.getElementById("btn-add");
  addMoneyButton.addEventListener("click", function (event) {
    event.preventDefault();

    // get all four input value
    const bankName = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-acc").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPinNumber = parseInt(document.getElementById("add-pin").value);

    // get main amount
    const mainAmount = parseInt(
      document.getElementById("main-amount").innerText
    );

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString,
    };
    transactionsData.push(data);
  });
});

// cashout handle
const cashOut = document.getElementById("cashout");
cashOut.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("cashout-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("cashout")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("cashout")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
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

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString,
    };
    transactionsData.push(data);
  });
});

//transfer money
const transfer = document.getElementById("transfer");
transfer.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("transfer-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("transfer")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("transfer")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
  }

  const sendBtn = document.getElementById("btn-send");
  sendBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const transferAcc = document.getElementById("transfer-acc").value;
    const transferPin = parseInt(document.getElementById("transfer-pin").value);
    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const mainAmount = parseInt(
      document.getElementById("main-amount").innerText
    );

    // validation
    if (transferAcc.length < 11) {
      alert("Please enter valid user account.");
      return;
    } else if (isNaN(transferAmount)) {
      alert("Please enter your amount.");
      return;
    } else if (transferPin !== validPin) {
      alert("Please enter correct pin number.");
      return;
    }

    if (mainAmount < transferAmount) {
      alert("You haven't enough money to transfer");
    } else {
      const finalAmount = mainAmount - transferAmount;
      document.getElementById("main-amount").innerText = finalAmount;
    }

    document.getElementById("transfer-acc").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString,
    };
    transactionsData.push(data);
  });
});

// get bonus
const getBonus = document.getElementById("bonus");
getBonus.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("bonus-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("bonus")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("bonus")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
  }

  const bonusBtn = document.getElementById("btn-bonus");
  bonusBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const couponNumber = parseInt(document.getElementById("coupon-num").value);
    const mainAmount = parseInt(
      document.getElementById("main-amount").innerText
    );

    // validation
    if (isNaN(couponNumber)) {
      alert("Please enter valid coupon number.");
      return;
    } else {
      alert("Congratulations! You won 5% bonus");
      const finalAmount = mainAmount + (mainAmount * 5) / 100;
      document.getElementById("main-amount").innerText = finalAmount;
    }

    document.getElementById("coupon-num").value = "";

    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleTimeString,
    };
    transactionsData.push(data);
  });
});

// pay bill
const payBill = document.getElementById("pay");
payBill.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("pay-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("pay")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("pay")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
  }

  const payBtn = document.getElementById("btn-pay");
  payBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const paybank = document.getElementById("pay-bank").value;
    const billerAccNum = document.getElementById("biller-acc").value;
    const payPin = parseInt(document.getElementById("pay-pin").value);
    const payAmount = parseInt(document.getElementById("pay-amount").value);
    const mainAmount = parseInt(
      document.getElementById("main-amount").innerText
    );

    // validation
    if (paybank === "Select bank") {
      alert("Please select a bank.");
      return;
    } else if (billerAccNum.length < 11) {
      alert("Please enter valid biller account.");
      return;
    } else if (isNaN(payAmount)) {
      alert("Please enter your amount.");
      return;
    } else if (payPin !== validPin) {
      alert("Please enter correct pin number.");
      return;
    }

    if (mainAmount < payAmount) {
      alert("You haven't enough money to pay bill");
    } else {
      const finalAmount = mainAmount - payAmount;
      document.getElementById("main-amount").innerText = finalAmount;
    }

    document.getElementById("biller-acc").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("pay-pin").value = "";

    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });
});

// pay transactions
const transactions = document.getElementById("transactions");
transactions.addEventListener("click", function () {
  const allFormSection = document.querySelectorAll(".form-section");
  for (const el of allFormSection) {
    el.style.display = "none";
    document.getElementById("transactions-sec").style.display = "block";

    const allCard = document.querySelectorAll(".card");
    for (const card of allCard) {
      card.classList.remove(
        "bg-[#0874f20d]",
        "border-[#0874F2]",
        "text-[#0874F2]"
      );
      card.classList.add("bg-white", "border-gray-300");
    }
    document
      .getElementById("transactions")
      .classList.remove("bg-white", "border-gray-300");
    document
      .getElementById("transactions")
      .classList.add("bg-[#0874f20d]", "border-[#0874F2]", "text-[#0874F2]");
  }

  const transactionsContainer = document.getElementById(
    "transaction-container"
  );
  transactionsContainer.innerText = "";
  for (const data of transactionsData) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div
            class="flex justify-between items-center px-4 py-3 rounded-xl bg-white border-1 border-gray-200 mb-3"
          >
            <div class="flex justify-between items-center">
              <div class="mr-2 p-3 bg-[#0808080d] rounded-full">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div>
                <h3 class="text-[#080808b3] font-semibold">${data.name}</h3>
                <p class="text-[12px] text-[#080808b3]">${data.date}</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
    `;
    transactionsContainer.appendChild(div);
  }
});
