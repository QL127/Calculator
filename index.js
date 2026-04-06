
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
let firstNum = 0;
let secondNum = 0;
let operatorSign = ""; 

// create function to take operator & 2 nums & call one of the above functions
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            add (firstNum, secondNum);
            break;
        case '-':
            subtract (firstNum, secondNum);
            break;
        case 'x':
            multiply (firstNum, secondNum);
            break;
        case '/':
            multiply (firstNum, secondNum);
    }
}

// functions update firstNum, secondNum when num buttons are clicked
// the display also show the number

// when the each num pad is clicked, number has to show

function updateNum() {
    // reference the number buttons
    const numbers = document.querySelectorAll(".number");

    let input = "";

    numbers.forEach(number => {
        number.addEventListener("click", (event) => {
            input = event.target.textContent;
            updateDisplay(input);
        });
    });

    return Number(input);
}

// function to update the operators 
function updateOperator() {
    const operators = document.querySelectorAll(".operator");

    let sign = "";

    operators.forEach(operator => {
        operator.addEventListener("click", (event) => {
            sign = event.target.textContent;
            updateDisplay(sign);
        });
    });

    return sign;
}

function updateDisplay(input) {
    const dis = document.querySelector(".display");
    dis.textContent = input;
}

// function to clear everything

// update the variables
firstNum = updateNum;
updateDisplay(firstNum);

// if first number exists, then second number is updated
if (firstNum != null) {
    secondNum = updateNum;
    updateDisplay(secondNum);
}

operatorSign = updateOperator;






let num1 = 10;
let num2 = 13;

let answer = divide(num1, num2);

console.log(answer);