
let firstNumber
let operator
let secondNumber

//Create basic calculation functions
const sum = function(a, b) {
    return a + b;
}
const sub = function(a, b) {
    return a - b;
}
const mul = function (a, b) {
    return a * b;
}
const div = function (a, b) {
    return a / b;
}


const operate = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        return sum(firstNumber, secondNumber);
    } else if (operator === '-') {
        return sub(firstNumber, secondNumber)
    } else if (operator === '*') {
        return mul(firstNumber, secondNumber)
    } else if (operator === '/') {
        return div(firstNumber, secondNumber)
    }
}

//Select display
let display = document.querySelector('.calculator-display');

//Reset display at first press
let button = document.querySelectorAll('.calculator-button');
button.forEach(button => {
    button.addEventListener('click', function () {
        if (display.textContent == 0) {
            display.textContent = ''
        } else if (display.textContent > 999999999) {
            display.textContent = 'Limit reached!' ; return
        }
    });
});

//Function for adding numbers
function add (a) {
display.textContent += a;
return
};

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
document.getElementById('point-button').addEventListener('click', () => add('.'));


/*
Limits decimals, but drops trailing zeroes
+parseFloat((RESULT).toFixed(5));
*/