const STORAGE_KEY = 'feedback-form-state',
  formData = { email: '', message: '' },
  form = document.querySelector('.feedback-form');
  
form.addEventListener('submit', (event) => {
  event.preventDefault();
	 console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)));
   localStorage.removeItem(STORAGE_KEY );
  form.reset();

});


form.addEventListener('input', (event)=>{
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
   
  
});



//////////////////////////////////////////////////////////////////

const populateForm = function (){
  const savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

}
populateForm();


// textarea.value = localStorage.getItem(STORAGE_KEY) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

