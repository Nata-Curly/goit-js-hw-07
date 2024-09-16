const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  // console.dir(event.target);
  const emailValue = formElements.email.value.trim();
  const passwordValue = formElements.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  event.target.reset();
}
