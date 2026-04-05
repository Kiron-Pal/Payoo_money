// Get the cashout button element

document.getElementById("cashout-btn").addEventListener("click", function() {
//taking the cashout number value

    const cashoutNumber = getValueFromnput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length !== 11) {
        alert("Please enter a valid phone number");
        return;
    }

    //taking the cashout amount value


    const cashoutAmount = getValueFromnput("cashout-amount");
    

    //TAKING THE BALANCE AMOUNT

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    //CALCULATING THE AMOUNT AFTER CASHOUT

    const newBlance = Number(balance) - Number(cashoutAmount);
    //CHECKING IF THE BALANCE IS ENOUGH FOR CASHOUT
    

    if(newBlance < 0) {
        alert("Your balance is not enough");
        return;
    }


    //taking the cashout pin value
    const Pin = getValueFromnput("cashout-pin");
    if(Pin === "1234") {
        alert("Cashout Done");
          console.log(newBlance);
            balanceElement.innerText = newBlance;
        
    } else {
        alert("wrong Pin");
        return;
    }

});