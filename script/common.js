//common id and value taking function
 function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id , value);
    return value;

 }
//getting the current balance
 function getBalance(){
   const balanceElement = document.getElementById('balance');
   const balance = balanceElement.innerText;
   console.log('balance' , Number(balance));
   return Number(balance);
 }
//setting the balance function
 function setbalance(value){
   const balanceElement = document.getElementById("balance");
   balanceElement.innerText = value;
 }

 //section show hiide funciton on click

 function show(id){
  
   const addmoney = document.getElementById('add-money');
   const cashout = document.getElementById('cashout');
  const paybill = document.getElementById('pay-bill');
    const history = document.getElementById('transaction-history');
   const sendmoney = document.getElementById('send-money');
   const bonus = document.getElementById('get-bonus');

   addmoney.classList.add('hidden');
   cashout.classList.add('hidden');
    paybill.classList.add('hidden');
    history.classList.add('hidden');
   sendmoney.classList.add('hidden');
    bonus.classList.add('hidden');

    const element = document.getElementById(id);
    element.classList.remove('hidden');

   
   
 }