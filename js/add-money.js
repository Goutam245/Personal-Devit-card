/**
 * How To get a number from an Input field
 * 1. Create a variable.
 * 2. right side document.getElementbyId(Id)
 * 3. value
 * 4. parsefloat
 */



document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault()


    //getInputFieldvalueId()
    //const addMoney = getInputFieldvalueId();
    //console.log('add Money value', addMoney)
    //const addMoney= document.getElementById('Input-add-money').value;
    //const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldvalueId('Input-add-money');
    const pinNumber = getInputFieldvalueId('Input-pin-number');
    console.log('add money With parameter', addMoney, pinNumber)

})