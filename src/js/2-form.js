const STORAGE_KEY = 'feedback-form-state',
       formData = { email: '', message: '' },
       form = document.querySelector('.feedback-form'),
       inputEmail = document.querySelector('input'),
       textareaMessage =  document.querySelector('textarea');
  

    
///////////////////////////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', ()=>{   
    if( localStorage.getItem(STORAGE_KEY) ?? ""){
      inputEmail.value = JSON.parse( localStorage.getItem(STORAGE_KEY)).email;
      textareaMessage.value = JSON.parse( localStorage.getItem(STORAGE_KEY)).message;  
     formData.email =  inputEmail.value;
     formData.message = textareaMessage.value;
   
    }
       
  });
  
  
///////////////////////////////////////////////////////////////////

form.addEventListener('input', (event)=>{
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

///////////////////////////////////////////////////////////////////////

form.addEventListener('submit', (event) => {
  event.preventDefault();
   if( inputEmail.value ==='' ||  textareaMessage.value ===''){
     alert('Fill please all fields!');
     return;
   }
	 console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)));
   formData.email ='';
   formData.message ='';
   localStorage.removeItem(STORAGE_KEY );
  form.reset();

});

///////////////////////////////////////////////////////////////////


