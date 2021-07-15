// VARIABLES
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const inputs= document.querySelector('form').elements;

// Regex
const checkString = /^[a-zA-Z]{2}/;
const checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const checkDate= /^\d{4}-\d{2}-\d{2}$/;
const checkNumber= /^[0-9]+$/;

//EVENTS
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

//FUNCTIONS
// Navbar
function editNav() {
  const navBar = document.getElementById("myTopnav");
  if (navBar.className === "topnav") {
    navBar.className += "responsive";
  } else {
    navBar.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//firstname validation
function firstNameValidation(e){ 
  e.preventDefault();
  const input= inputs['first'];
  const error= document.getElementById('error-first');
  if(!checkString.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error.classList.add('span-error');
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

// lastName Validation
function lastNameValidation(e){
  e.preventDefault();
  const input= inputs['last'];
  const error= document.getElementById('error-last');
  if(!checkString.test(input.value.trim())){
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.classList.add('span-error');
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

// emailValidation
function emailValidation(e){
  e.preventDefault();
  const input= inputs['email'];
  const error= document.getElementById('error-email');
  if(!checkMail.test(input.value.trim())){
    error.innerText= "Vous devez entrer une adresse email valide.";
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.classList.add('span-error');
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//birthdate validation
function birthdateValidation(e){ 
  e.preventDefault();
  const input= inputs['birthdate'];
  const error= document.getElementById('error-birthdate');
  if(!checkDate.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez entrer votre date de naissance.";
    error.classList.add('span-error');
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//quantity validation
function quantityValidation(e){ 
  e.preventDefault();
  const input= inputs['quantity'];
  const error= document.getElementById('error-quantity');
  if(!checkNumber.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez saisir une valeur numérique.";
    error.classList.add('span-error');
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

// location Validation
function locationValidation(e){
  e.preventDefault();
  const checkBoxes= document.querySelectorAll('.checkbox-input[type=radio]');
  const checkBoxesLabels= document.querySelectorAll('.checkbox-label span');
  const error= document.getElementById('error-location');
  for(let i= 0; i< checkBoxes.length; i++){
    if(checkBoxes[i].checked){
      checkBoxesLabels.forEach(element=>{
        element.classList.remove('invalid');
      });
      error.classList.remove('span-error');
      error.innerText= "";
      return true;
    }
  }
  checkBoxesLabels.forEach(element=>{
    element.classList.add('invalid');
  });
  error.innerText= "Veuillez choisir une ville.";
  error.classList.add('span-error');
  return false;
}

// cgu validation
function cguValidation(e){
  e.preventDefault();
  const input= inputs['cgu'];
  const checkBoxIcon= document.querySelector('.checkbox2-label span');
  const error= document.getElementById('error-cgu');
  if(!input.checked){
    checkBoxIcon.classList.add('invalid');
    error.innerText= "Veuillez accepter les CGU.";
    error.classList.add('span-error');
    return false;
  }
  else{
    checkBoxIcon.classList.remove('invalid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//form submit function
function validate(e){
  e.preventDefault();
  firstNameValidation(e);
  lastNameValidation(e);
  emailValidation(e);
  birthdateValidation(e);
  quantityValidation(e);
  locationValidation(e);
  cguValidation(e);
  if(firstNameValidation(e) && lastNameValidation(e) && emailValidation(e) && birthdateValidation(e) && quantityValidation(e) && locationValidation(e) && cguValidation(e)){
    //créer un template de la modal "validation" ici
    const thanksModal= document.createElement('section');
    document.querySelector('main').appendChild(thanksModal);
    thanksModal.classList.add('thanks');
    thanksModal.innerHTML= "<div class='content'><span class='close'></span><div class='modal-body'><h3>Merci pour votre inscription !</h3><button class='btn-submit' type='submit' class='button'>Fermer</button></div></div>"
    modalbg.style.display= "none";
    thanksModal.style.display = "block";
    const finalModalCloseBtn= document.querySelector(".close");
    const thanksCloseButton= document.querySelector("button.btn-submit");
    finalModalCloseBtn.addEventListener("click", closeThanksModal);
    thanksCloseButton.addEventListener("click", closeThanksModal);
    function closeThanksModal(){
      thanksModal.style.display= "none";
    }
  }
}

