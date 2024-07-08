let currentNumber = '';
let previousNumber = '';
let operator = null;

const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operator = null;
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateDisplay();
}

function deleteNumber() {
    currentNumber = currentNumber.toString().slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    currentOperandTextElement.innerText = currentNumber === '' ? '0' : currentNumber;
    if (operator != null) {
        previousOperandTextElement.innerText = `${previousNumber} ${operator}`;
    } else {
        previousOperandTextElement.innerText = '';
    }
}
