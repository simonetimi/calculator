
let firstNumber = 0;
let operator;
let secondNumber = 0;
let operatorState = false;
let initialState = true;

//Create basic calculation functions
const sum = (a, b) => a + b;
const sub = function (a, b) {
    if (initialState === true && a < b) {
        initialState = false;
        return b
    } else {
        return a - b}
};
const mul = function (a, b) {
    if (initialState === true) {
        initialState = false;
        return b;
    } else {
        return a * b}
};
const div = function (a, b) {
    if (initialState === true) {
        initialState = false;
        return b;
    };
    if (b !== 0) {
        return +parseFloat((a / b).toFixed(9));
    } else {
        return 'I see you.'
    }
};

//Create operate function
const operate = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        a = display.textContent = sum(firstNumber, secondNumber);
        return a;
    } else if (operator === '-') {
        a = display.textContent = sub(firstNumber, secondNumber);
        return a;
    } else if (operator === '*') {
        a = display.textContent = mul(firstNumber, secondNumber);
        return a;
    } else if (operator === '/') {
        a = display.textContent = div(firstNumber, secondNumber);
        return a;
    }
};

//Select display
let display = document.querySelector('.calculator-display');

//Function for adding numbers on display
function add(a) {
    if (display.textContent === '0' && a !== '.') {
        display.textContent = '';
    }

    if (operatorState === false || (operatorState === true && a === '.')) {
        display.textContent += a;
    }

    if (operatorState === true && a !== '.') {
        operatorState = false;
        display.textContent = a;
    }
}

//Button listeners
document.getElementById('7-button').addEventListener('click', () => add(7));
document.getElementById('8-button').addEventListener('click', () => add(8));
document.getElementById('9-button').addEventListener('click', () => add(9));
document.getElementById('4-button').addEventListener('click', () => add(4));
document.getElementById('5-button').addEventListener('click', () => add(5));
document.getElementById('6-button').addEventListener('click', () => add(6));
document.getElementById('1-button').addEventListener('click', () => add(1));
document.getElementById('2-button').addEventListener('click', () => add(2));
document.getElementById('3-button').addEventListener('click', () => add(3));
document.getElementById('0-button').addEventListener('click', () => add(0));
document.getElementById('point-button').addEventListener('click', function() {
    add('.');
    document.getElementById('point-button').disabled = true;
});
document.getElementById('sum-button').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    secondNumber = +display.textContent;
    operator = '+';
    firstNumber = operate(firstNumber, operator, secondNumber);
    operatorState = true;
});
document.getElementById('sub-button').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    secondNumber = +display.textContent;
    operator = '-';
    firstNumber = operate(firstNumber, operator, secondNumber);
    operatorState = true;
});
document.getElementById('mul-button').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    secondNumber = +display.textContent;
    operator = '*';
    firstNumber = operate(firstNumber, operator, secondNumber);
    operatorState = true;
});
document.getElementById('div-button').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    secondNumber = +display.textContent;
    operator = '/';
    firstNumber = operate(firstNumber, operator, secondNumber);
    operatorState = true;
});
document.getElementById('enter-button').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    secondNumber = +display.textContent;
    firstNumber = operate(firstNumber, operator, secondNumber);
    operator = '';
    operatorState = true;
    initialState = true;
    firstNumber = 0;
    lastNumber = 0;
});
document.getElementById('AC').addEventListener('click', function () {
    document.getElementById('point-button').disabled = false;
    operator = '';
    operatorState = true;
    initialState = true;
    firstNumber = 0;
    lastNumber = 0;
    display.textContent = 0;
});

/*
Limits decimals, but drops trailing zeroes
+parseFloat((RESULT).toFixed(5));
*/