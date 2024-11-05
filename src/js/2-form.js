const STORAGE_KEY = 'feedback-form-state',
  formData = { email: '', message: '' },
  form = document.querySelector('.feedback-form'),
  inputEmail = document.querySelector('input'),
  textareaMessage = document.querySelector('textarea');

form.addEventListener('submit', handleSubmit);
inputEmail.addEventListener('input', handleInput);
textareaMessage.addEventListener('input', handleInput);

///////////////////////////////////////////////////////////
function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
//////////////////////////////////////////////////////////////////
populateForm();
function populateForm() {
  const savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
