console.log('Hello');

let email = document.getElementById('email');
let number = document.getElementById('number');
let pincode = document.getElementById('pincode');
isEmailValid = false;
isNumberValid = false;
isPincodeValid = false;

email.addEventListener('blur', () => {

    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    let yourEmail = document.getElementById('yourEmail');
    let newElement = document.createElement('div');
    newElement.id = 'newElement';
    let content = document.createTextNode('Please enter a valid email address.');
    newElement.append(content);
    

    let emailLabel = document.getElementById('emailLabel');
    yourEmail.insertBefore(newElement, emailLabel);


    if (regex.test(str)) {
        let yourEmail = document.getElementById('yourEmail');
        yourEmail.removeChild(document.getElementById('newElement'));
        email.style.border = 'none';
        isEmailValid = true;

    }
    else {
        isEmailValid = false;
        let email = document.getElementById('email');



        newElement.style.color = 'red';
        email.style.border = '2px solid red';

        newElement.style.paddingLeft = '10%';


    }

})

number.addEventListener('blur', () => {

    let regex = /^[0-9]([0-9]){9}$/;
    let str = number.value;

    let yourNumber = document.getElementById('yourNumber');
    let newNumberElement = document.createElement('div');
    newNumberElement.id = 'newNumberElement';
    let content = document.createTextNode('Please enter a 10 digit long number.');
    newNumberElement.append(content);
   
    let numberLabel = document.getElementById('numberLabel');
    yourNumber.insertBefore(newNumberElement, numberLabel);


    if (regex.test(str)) {
        let yourNumber = document.getElementById('yourNumber');
        yourNumber.removeChild(document.getElementById('newNumberElement'));
        number.style.border = 'none';
        isNumberValid = true;

    }
    else {
        let number = document.getElementById('number');

        newNumberElement.style.color = 'red';
        number.style.border = '2px solid red';
        newNumberElement.style.paddingLeft = '10%';

        isNumberValid = false;
    }
})

pincode.addEventListener('blur', () => {

    let regex = /^[1-9]([0-9]){5}$/;
    let str = pincode.value;

    let yourPincode = document.getElementById('yourPincode');
    let newPincodeElement = document.createElement('div');
    newPincodeElement.id = 'newPincodeElement';
    let content = document.createTextNode('Please enter a 10 digit long number.');
    newPincodeElement.append(content);
   
    let pincodeLabel = document.getElementById('pincodeLabel');
    yourPincode.insertBefore(newPincodeElement, pincodeLabel);
   
    if (regex.test(str)) {
        let yourPincode = document.getElementById('yourPincode');
        yourPincode.removeChild(document.getElementById('newPincodeElement'));
        pincode.style.border = 'none';
        isPincodeValid = true;

    }
    else {
        let pincode = document.getElementById('number');

        newPincodeElement.style.color = 'red';
        pincode.style.border = '2px solid red';
        newPincodeElement.style.paddingLeft = '10%';

        isPincodeValid = false;


    }
})

let orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('Button has clicked');

    console.log(isEmailValid, isNumberValid, isPincodeValid);

    let successMessage = document.getElementById('successMessage');
    let success = document.createElement('div');
    let flag = false;
    
    if (isEmailValid && isNumberValid && isPincodeValid) {
        
        let content = document.createTextNode('Order has been placed successfully');
        success.append(content);
        successMessage.insertBefore(success, orderBtn);
        success.style.paddingLeft = '10%';
        success.style.color = 'green';
        flag = true;
        console.log(successMessage);
        
    }
    else {
        let content = document.createTextNode('Please try again');
        success.append(content);
        successMessage.insertBefore(success, orderBtn);
        success.style.paddingLeft = '10%';
        success.style.color = 'red';
        console.log('some error');
        flag = false;
    }
    
})

