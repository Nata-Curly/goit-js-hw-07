const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', handleInput);


function handleInput(event) {
  
  const trimmedValue = event.target.value.trim();
  return outputElement.textContent = trimmedValue || 'Anonymous';
}
