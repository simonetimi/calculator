
let firstNumber = 0;
let operator;
let secondNumber = 0;
let operatorState = false;
let initialState = true;
let numberCounter = 0;

//Create basic calculation functions
const sum = (a, b) => convertNumber(a + b);
const sub = function (a, b) {
    if (initialState === true && a < b) {
        initialState = false;
        return convertNumber(b)
    } else {
        return convertNumber(a - b)}
};
const mul = function (a, b) {
    if (initialState === true) {
        initialState = false;
        return convertNumber(b)
    } else {
        return convertNumber(a * b)}
};
const div = function (a, b) {
    if (initialState === true) {
        initialState = false;
        return convertNumber(b)
    };
    if (b !== 0) {
        return convertNumber(+parseFloat((a / b).toFixed(9)))
    } else {
        return 'I see you.'
    }
};

//Create operate function
const operate = function (firstNumber, operator, secondNumber) {
    if (operator === '+') {
        display.textContent = sum(firstNumber, secondNumber);
        return convertNumber(display.textContent)
    } else if (operator === '-') {
        display.textContent = sub(firstNumber, secondNumber);
        return convertNumber(display.textContent)
    } else if (operator === '*') {
        display.textContent = mul(firstNumber, secondNumber);
        return convertNumber(display.textContent)
    } else if (operator === '/') {
        display.textContent = div(firstNumber, secondNumber);
        return convertNumber(display.textContent)
    }
};

//Select display
let display = document.querySelector('.calculator-display');

//Function for adding numbers on display
function add(a) {
    if (numberCounter <= 9) {
        numberCounter += 1;
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
    } else if (numberCounter > 9) {
        return
    }
}

//Get buttons
const button7 = document.getElementById('7-button')
const button8 = document.getElementById('8-button')
const button9 = document.getElementById('9-button')
const button4 = document.getElementById('4-button')
const button5 = document.getElementById('5-button')
const button6 = document.getElementById('6-button')
const button3 = document.getElementById('3-button')
const button2 = document.getElementById('2-button')
const button1 = document.getElementById('1-button')
const button0 = document.getElementById('0-button')
const buttonPoint = document.getElementById('point-button')
const sumButton = document.getElementById('sum-button')
const subButton = document.getElementById('sub-button')
const mulButton = document.getElementById('mul-button')
const divButton = document.getElementById('div-button')
const enterButton = document.getElementById('enter-button')
const acButton = document.getElementById('AC')


//Button listeners
button7.addEventListener('click', () => add(7));
button8.addEventListener('click', () => add(8));
button9.addEventListener('click', () => add(9));
button4.addEventListener('click', () => add(4));
button5.addEventListener('click', () => add(5));
button6.addEventListener('click', () => add(6));
button1.addEventListener('click', () => add(1));
button2.addEventListener('click', () => add(2));
button3.addEventListener('click', () => add(3));
button0.addEventListener('click', () => add(0));
buttonPoint.addEventListener('click', () => {
    add('.');
    buttonPoint.disabled = true;
    });
sumButton.addEventListener('click', function () {
    if (operatorState === false) {
    buttonPoint.disabled = false;
    numberCounter = 0;
    secondNumber = +display.textContent;
    operator = '+';
    operatorState = true;
    firstNumber = +operate(firstNumber, operator, secondNumber);
    } else {
        return
    }
});
subButton.addEventListener('click', function () {
    if (operatorState === false) {
    buttonPoint.disabled = false;
    numberCounter = 0;
    secondNumber = +display.textContent;
    operator = '-';
    operatorState = true;
    firstNumber = +operate(firstNumber, operator, secondNumber);
    } else {
        return
    }
});
mulButton.addEventListener('click', function () {
    if (operatorState === false) {
    buttonPoint.disabled = false;
    numberCounter = 0;
    secondNumber = +display.textContent;
    operator = '*';
    operatorState = true;
    firstNumber = +operate(firstNumber, operator, secondNumber);
    } else {
        return
    }
});
divButton.addEventListener('click', function () {
    if (operatorState === false) {
    buttonPoint.disabled = false;
    numberCounter = 0;
    secondNumber = +display.textContent;
    operator = '/';
    operatorState = true;
    firstNumber = +operate(firstNumber, operator, secondNumber);
    } else {
        return
    }
});
enterButton.addEventListener('click', function () {
    buttonPoint.disabled = false;
    numberCounter = 0;
    secondNumber = +display.textContent;
    firstNumber = +operate(firstNumber, operator, secondNumber);
    operatorState = false;
    initialState = true;
    firstNumber = 0;
    lastNumber = 0;
});
acButton.addEventListener('click', function () {
    buttonPoint.disabled = false;
    numberCounter = 0;
    operator = '';
    operatorState = true;
    initialState = true;
    firstNumber = 0;
    lastNumber = 0;
    display.textContent = 0;
});

// Keyboard support


document.addEventListener('keypress', (event) => {
    if (event.code === 'Digit7' && event.shiftKey === false) {
      button7.click();
    } else if (event.code === 'Digit8') {
        button8.click();   
    } else if (event.code === 'Digit9') {
        button9.click();   
    } else if (event.code === 'Digit4') {
        button4.click();   
    } else if (event.code === 'Digit5') {
        button5.click();   
    } else if (event.code === 'Digit6') {
        button6.click();   
    } else if (event.code === 'Digit1') {
        button1.click();   
    } else if (event.code === 'Digit2') {
        button2.click();   
    } else if (event.code === 'Digit3') {
        button3.click();   
    } else if (event.code === 'Digit0') {
        button0.click();   
    } else if (event.key === '.') {
        buttonPoint.click();   
    } else if (event.code === 'Backspace') {
        event.preventDefault();
        acButton.click();   
    } else if (event.key === 'Delete') {
        event.preventDefault();
        acButton.click();   
    } else if (event.key === 'Enter') {
        event.preventDefault();
        enterButton.click();   
    } else if (event.key === '+') {
        sumButton.click();   
    } else if (event.key === '-') {
        subButton.click();   
    } else if (event.key === '*') {
        mulButton.click();   
    } else if (event.key === 'x') {
        event.preventDefault();
        mulButton.click();   
    } else if (event.key === '/') {
        divButton.click();   
    }
  });


function convertNumber(num) {
    let digits = Math.floor(Math.log10(Math.abs(num))) + 1;
    if (digits > 7) {
        num = parseFloat(num);
        return num.toPrecision(6);
    }
    else {
        return num;
    }
}

  
/* BUGS
> Backspace on keyboard doesn't work

*/