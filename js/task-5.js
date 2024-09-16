function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyElement: document.querySelector('body'),
  btnElement: document.querySelector('.change-color'),
  bodyColor: document.querySelector('.color'),
};

refs.btnElement.addEventListener('click', handleClick);

function handleClick() {
  const bgColor = getRandomHexColor();
  console.log(bgColor);
  refs.bodyElement.style.backgroundColor = bgColor;
  refs.bodyColor.textContent = bgColor;
}
