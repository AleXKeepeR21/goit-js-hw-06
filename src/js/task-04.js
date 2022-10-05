const decrementBtn = document.querySelectorAll("button")[0];
const incrementBtn = document.querySelectorAll("button")[1];
const valueRef = document.querySelector("#value");

let counterValue = 0;

// якщо присвоїти const  - працювати не буде 

decrementBtn.addEventListener('click', (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

incrementBtn.addEventListener('click', (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});

