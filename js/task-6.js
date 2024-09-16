function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  outputBoxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  refs.outputBoxes.innerHTML = '';

  let divSize = 30;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    divSize += 10;
  }
  refs.outputBoxes.append(...elements);
}

function destroyBoxes() {
  refs.outputBoxes.innerHTML = '';
  refs.input.value = '';
}

refs.btnCreate.addEventListener('click', handleClick);

refs.btnDestroy.addEventListener('click', destroyBoxes);

function handleClick() {
  const amount = parseInt(refs.input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter number from 1 to 100!');
  }
  refs.input.value = '';
}
