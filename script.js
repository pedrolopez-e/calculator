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

const operate = function(a,b,f) {
    return f(a,b);
}

let value1;
let value2;
let result;
let operation;
const numbers = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear")
const operators = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal");

numbers.forEach((number) => {
    number.addEventListener('click', function(event) {
        if (operation === undefined) {
            screen.textContent += event.target.textContent;
            value1 = Number(screen.textContent);
        } else {
            screen.textContent += event.target.textContent;
            value2 = Number(screen.textContent);
            result = operate(value1, value2, operation);
        }        
    });
});

clear.addEventListener('click', function(event) {
    screen.textContent = "";
});

equal.addEventListener('click', function(event) {
    if (result != undefined) {
        screen.textContent = result;
        operation = undefined;
    }
})

operators.forEach((operator) => {
    operator.addEventListener('click', function(event) {
        screen.textContent = "";
       if (event.target.textContent === "+") {
           operation = add;
       } else if (event.target.textContent === "-") {
           operation = substract;
       } else if (event.target.textContent === "x") {
           operation = multiply;
       } else if (event.target.textContent === "/") {
           operation = divide;
       };        
    });
});







