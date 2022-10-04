
var calculatorDisplayValue = '';
var firstValue = '';
var secondValue = '';
var selectedOperand = '';

updateDisplay();

const buttons = document.querySelector("#buttons");
const numbers = buttons.querySelectorAll("button:not(.operand):not(.special)");
const operands = buttons.querySelectorAll(".operand");

const specials = buttons.querySelectorAll(".special");
const equals = document.getElementById("=");
const clear = document.getElementById("C");



numbers.forEach(number => number.addEventListener('click', function(e) {
    if(calculatorDisplayValue === "STOP IT!") { return };
    
    calculatorDisplayValue = Number(calculatorDisplayValue + e.target.innerText);
    updateDisplay();
}));

operands.forEach(operand => operand.addEventListener('click', function(e) {
    if(calculatorDisplayValue == "STOP IT!") { return };

    if(firstValue === '') {
        firstValue = calculatorDisplayValue;
        calculatorDisplayValue = '';
        selectedOperand = e.target.innerText;
        //updateDisplay();
    } else if(calculatorDisplayValue === '') {
        selectedOperand = e.target.innerText;
    } else {
        secondValue = calculatorDisplayValue;
        calculatorDisplayValue = operate(selectedOperand, Number(firstValue), Number(secondValue));
        updateDisplay();
        selectedOperand = e.target.innerText;
        firstValue = calculatorDisplayValue;
        secondValue = '';
        if(calculatorDisplayValue !== "STOP IT!") { 
            calculatorDisplayValue = '';
        }
    }
}));

equals.addEventListener('click', function(e) {
    if(calculatorDisplayValue == "STOP IT!") { return };

    if(calculatorDisplayValue !== '') {
        secondValue = parseInt(calculatorDisplayValue);
    }

    if(firstValue === '' || secondValue === '' || selectedOperand === '') {
        return;
    }
    calculatorDisplayValue = operate(selectedOperand, Number(firstValue), Number(secondValue));
    updateDisplay();
    firstValue = calculatorDisplayValue;
    if(calculatorDisplayValue !== "STOP IT!") { 
        calculatorDisplayValue = '';
    }
    selectedOperand = '';
    secondValue = '';

});

clear.addEventListener('click', function(e) {
    calculatorDisplayValue = '';
    firstValue = '';
    secondValue = '';
    updateDisplay();
});

function updateDisplay() {
    const display = document.querySelector('#display');

    if( calculatorDisplayValue === '') {
        display.innerText = 0;
    } else {
        display.innerText = calculatorDisplayValue;
    }
}

function add(a,b) { return a + b; }
function subtract(a,b) { return a - b; }
function multiply(a,b) { return a * b; }
function divide(a,b) { 
    if(b === 0) {
        firstValue = '';
        selectedOperand = '';
        secondValue = '';
        return "STOP IT!"
    }
    return a / b; 
}

function operate(operand, a, b) {
    switch(operand) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    }
}