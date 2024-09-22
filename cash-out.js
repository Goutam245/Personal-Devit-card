document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();

    const CashOut= getInputFieldvalueId('Input-cash-out')
    const pinNumber= getInputFieldvalueId('Input-cash-out-pin')

    if(isNaN(CashOut)){
        alert('Wrong Cashout! Pleace try Again')
         return;
    }
    
    //console.log('This is cash Money Or Pin', CashOut, pinNumber)
    if(pinNumber=== 1234){
      const balance = getTextfieldvalueById ('Account-balance');
      if (CashOut > balance){
        alert('You do not have enough money to the Cashout')
        return;
      }
      
      const NewBalance = balance - CashOut;
      document.getElementById('Account-balance').innerText = NewBalance;

      //  Add To transaction history
      const div = document.createElement ('div')
      div.classList.add('bg-blue-200');
      div.innerHTML= `
      <h4 class= "text-2xl font-bold">Cash Out</h4>
      <p>${CashOut} Windraw. New Blance ${NewBalance}</p>
      `
      document.getElementById('Transaction-container').appendChild (div)
    }
    else{
        alert('Wrong Pin Or Amount')
    }
   
})