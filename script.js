const add = function(a,b) {
    return a + b;
}

const substract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

const operator = function(a,b,f) {
    return f(a,b);
}

let value1;
let value2;
let operation;
const numbers = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear")
const operators = document.querySelector(".operator")

numbers.forEach((number) => {
    number.addEventListener('click', function(event) {
        screen.textContent = event.target.textContent;
    });
});

clear.addEventListener('click', function(event) {
    screen.textContent = "";
});

operators.forEach((operator) => {
    operator.addEventListener('click', function(event) {
        bool = false;
    });
});











