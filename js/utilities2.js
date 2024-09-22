function getInputFieldvalueId(id){
    const Inputvalue = document.getElementById(id).value;
    const inputNumber= parseFloat(Inputvalue)
    return inputNumber;
}

function getTextfieldvalueById(id){
    const textvalue = document.getElementById(id).innerText;
    const TextNumber = parseFloat(textvalue);
    return (TextNumber);
}

function showsectionId(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('Transaction-section').classList.add('hidden')

    // Show The section provide The Id parameter
    document.getElementById(id).classList.remove('hidden')
}