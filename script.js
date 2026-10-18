function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, oper){
    switch (oper) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
    }
}

let firstValue = 0;
let secondValue = 0;
let operator = '';

let input = document.querySelector('input');

let container = document.querySelector('.container');

container.addEventListener('click', (e) => firstValue = +e.target.textContent);
