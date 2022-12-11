

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

const LOCAL_KEY = 'feedback-form-state';
let formData = {};

formRef.addEventListener('input', throttle(textareaInput, 1000));
formRef.addEventListener('submit', onFormSubmit);


textareaValue();

function textareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
  
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  console.log('Storage:', JSON.parse(localStorage.getItem(LOCAL_KEY)));
  localStorage.removeItem(LOCAL_KEY);
}


function textareaValue() {
   const saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));
   if (saveMessage) {    
     emailRef.value = saveMessage.email;
     messageRef.value = saveMessage.message;   
   }
}


