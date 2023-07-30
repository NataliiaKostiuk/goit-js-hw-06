const form = document.querySelector('.login-form');
form.addEventListener('submit', onCheckForm);

function onCheckForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
     alert('All fields must be filled in');
  }else {
     const result = {};
    result.email = email.value;
    result.password = password.value;
    console.log(result);
      evt.currentTarget.reset();
  }
  }
 
 


