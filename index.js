
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// create variables for number, operator and another number
let firstNum = null;
let secondNum = null;
let currentOperator = null; 
let result = null;

// true when operator has been entered, and second number starts
let isEnteringSecond = false;
let justCalculated = false;

// array to store digits for cases of 2 or more digits numbers
let inputs = [];

// create function to take operator & 2 nums & call one of the above functions
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add (firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '/':
            {
                if (secondNum === 0) {
                    clear();
                    let message = "Can't divide by zero!";
                    return message;
                } else {
                    return divide(firstNum, secondNum);
                }
            }
    }
}

// functions update firstNum, secondNum when num buttons are clicked
// the display also show the number

// when the each num pad is clicked, number has to show

function updateNum(e) {

    if (justCalculated) {
        firstNum = null;
        secondNum = null;
        currentOperator = null;
        isEnteringSecond = false;
    }

    // add each digit to the end of the array
    inputs.push(e.target.textContent);

    // combine all digits into one number
    const value = inputs.join("");
    updateDisplay(value);
    
    // save to secondNum when operator has been entered
    if (isEnteringSecond) {
        secondNum = Number(value);
    } else {
        firstNum = Number(value);
    }
    
}

// function to update the operators 
function updateOperator(e) {

    isEnteringSecond = true;        // condition to store data to second number
    justCalculated = false;         // false so data won't clear when numpads are clicked
    inputs = [];                    // reset for second number

    if (currentOperator != null) {
        result = operate(firstNum, secondNum, currentOperator);
        updateDisplay(result);
        currentOperator = e.target.textContent;
        firstNum = result;
    } else {
        currentOperator = e.target.textContent;
    }
}

function updateDisplay(input) {
    const dis = document.querySelector(".display");
    dis.textContent = input;
}

// function to clear and reset everything
function clear() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    inputs = [];
    isEnteringSecond = false;
    updateDisplay(0);
}

const numpads = document.querySelectorAll(".number");
const operators = document.querySelectorAll("#divide,#times,#minus,#plus");
const equal = document.querySelector("#equal");
const clr = document.querySelector("#clear");

// first number entered
// Since updateNum already accepts the event, pass it directly, not using (event) =>
numpads.forEach(numpad => {
    numpad.addEventListener("click", updateNum);
});

// then operator entered
operators.forEach(operator => {
    operator.addEventListener("click", updateOperator);
});

// equal sign clicked
// the functions called don't use the element clicked so no (event)
equal.addEventListener("click", () => {
    result = operate(firstNum, secondNum, currentOperator);
    updateDisplay(result);
    inputs = [];                    // clear the array for next number
    justCalculated = true;          // condition to clear data for new calculation w new numbers
});

// clear button clicked
clr.addEventListener("click", clear);


// notable workflow

// = clicked => justCalculated = true => numpad clicked => data cleared for new calculation 
// => operator clicked => justCalculated = false => numpad clicked => data won't clear

// only clear data when numpad clicked right after = clicked
// if operator clicked after =, no data cleared and calculation continues


// missing case of negative number by clicking minus sign and num pad