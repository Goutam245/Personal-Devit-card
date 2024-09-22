document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldvalueId('Input-add-money')
    const pinNumber = getInputFieldvalueId('Input-pin-number')

    if(isNaN(addMoney)){
        alert('Wrong Amount! Pleace try Again')
         return;
    }
    //console.log('add Money inside addMoney to js', addMoney, pinNumber)

    if(pinNumber=== 1234){
        const balance = getTextfieldvalueById('Account-balance')
        const NewBalance = balance + addMoney;
        document.getElementById('Account-balance').innerText = NewBalance;

        // Add Money transaction History
        const p = document.createElement('p');
        p.innerText =  `Added ${addMoney} Tk. New Balance: ${NewBalance}`
        console.log(p);

        document.getElementById('Transaction-container').appendChild(p)
    }
    else{
        alert('Wrong Pin')
    }
})