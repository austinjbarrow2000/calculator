
var calculatorDisplayValue = '0';
updateDisplay();

const buttons = document.querySelector("#buttons");
const numbers = buttons.querySelectorAll("button:not(.operand):not(.special)");

numbers.forEach(number => number.addEventListener('click', function(e) {
    calculatorDisplayValue = parseInt(calculatorDisplayValue + e.target.innerText);
    updateDisplay();
}));

function updateDisplay() {
    const display = document.querySelector('#display');

    display.innerHTML = calculatorDisplayValue;
}

function add(a,b) { return a + b; }
function subtract(a,b) { return a - b; }
function multiply(a,b) { return a * b; }
function divide(a,b) { return a / b; }

function operate(operand, a, b) {
    switch(operand) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    }
}