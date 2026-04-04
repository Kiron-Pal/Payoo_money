document.getElementById("cashout-btn").addEventListener("click", function() {
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !== 11) {
        alert("Please enter a valid phone number");
        return;
    }

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);



    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    const newBlance = Number(balance) - Number(cashoutAmount);
    

    if(newBlance < 0) {
        alert("Your balance is not enough");
        return;
    }





    const cashoutPinInput = document.getElementById("cashout-pin");
    const Pin = cashoutPinInput.value;
    if(Pin === "1234") {
        alert("Cashout Done");
          console.log(newBlance);
            balanceElement.innerText = newBlance;
        
    } else {
        alert("wrong Pin");
        return;
    }

});