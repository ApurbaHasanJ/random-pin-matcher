function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }

    else{
        // console.log('pin not found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = getPin();

    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
    console.log(pin);
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedString = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedString.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedString = previousTypedString + number
        typedNumberField.value = newTypedString;
    }
});

// Verify pin
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const randomPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    if(typedNumber === randomPin){
        pinFailure.style.display= 'none';
        pinSuccess.style.display= 'block';

    }
    else{
        pinSuccess.style.display= 'none';
        pinFailure.style.display= 'block';

    }
})
