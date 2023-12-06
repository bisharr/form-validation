'use strict';

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.lenght == 0) {
    nameError.innerHTML = 'Name is Required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write Full name';
    return false;
  }
  nameError.innerHTML = '<ion-icon id="i" name="checkmark-outline"></ion-icon>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById('contact-phone').value;

  if (phone.lenght == 0) {
    phoneError.innerHTML = 'Phone No is required';
    return false;
  }
  if (phone.lenght !== 10) {
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits Please';
    return false;
  }
  phoneError.innerHTML =
    '<ion-icon id="i" name="checkmark-outline"></ion-icon>';
  return true;
}

function validateEmail() {
  var email = document.getElementById('contact-email').value;

  if (email.lenght == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-{0-9}*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid';
    return false;
  }
  emailError.innerHTML =
    '<ion-icon id="i" name="checkmark-outline"></ion-icon>';
  return true;
}
