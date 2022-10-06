const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonRef.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;

  })



