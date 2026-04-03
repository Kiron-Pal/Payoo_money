console.log("hello ")

document.getElementById("login-btn").addEventListener("click", function(){
    //taking the mobile number value
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

     //taking the piin number value
    const pinInput = document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    console.log(pinNumber);

    //matching the values
    if(contactNumber ==="00000000000" && pinNumber === "1234"){
        alert("login Sucessfull");
        window.location.assign("/home.html");
    }
    else{
        alert("Invalid credentials. Please try again.");
        return;
    }
});