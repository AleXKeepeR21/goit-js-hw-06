const loginFormRef = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

loginFormRef.addEventListener("submit", (event) => {
    event.preventDefault();
        
    const { email } = event.target.elements;
    const { password } = event.target.elements;

    const data = {
        email: email.value,
        password: password.value
    };

    inputs.forEach(input => {
    if (input.value.trim() === '')
    {        alert("Увага! Заповніть усі поля.");
    }
    });

    event.target.reset();
    console.log(data)
})



