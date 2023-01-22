const currentValue = document.getElementById('current-value');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperators = document.querySelectorAll('.operator');
const signButton = document.getElementById('sign');
const percentageButton = document.getElementById('perc');

const display = new Display(currentValue);

buttonNumbers.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
});

buttonOperators.forEach(button => {
    button.addEventListener('click', () => {
        display.compute(button.value);
    });
});

signButton.addEventListener('click', () => {
    display.changeSign();
});

percentageButton.addEventListener('click', () => {
    display.percentage();
});