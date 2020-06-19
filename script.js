const btn = document.getElementById('submit-btn');
const input = document.querySelector('.email-field');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

const log = event => {
  const pattern = new RegExp("@");
  const response = pattern.test(input.value); 
  // Conditions for the error and success message
  if (input.value === '' || response === false) {
    errorMessage.textContent = 'Please provide a valid email address';
    errorMessage.classList.add('error-txt');
    input.classList.add('failed');
    event.preventDefault();
  } else {
    input.classList.add('success');
    successMessage.textContent = 'You have subscribed successfully!'
    successMessage.classList.add('success-txt');
    event.preventDefault();
  } // event.preventDefault() - Prevents the page from refreshing on submission.
}

btn.addEventListener('click', event => log(event));