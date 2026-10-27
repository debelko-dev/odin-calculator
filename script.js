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
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
    }
}

function updateInput(){
    input.textContent = `${firstValue} ${operator} ${secondValue}`;
}

function resultInput(res, oper){
    operand = 1;
    operator = oper;
    secondValue = ''
    firstValue = res;
    if (res === Infinity || res === -Infinity){
        secondValue = 'ERROR';
        firstValue = '';
    }
    input.textContent = `${firstValue} ${operator} ${secondValue}`;
} 

let firstValue = '';
let secondValue = '';
let operator = ' ';
let operand = 1;

let input = document.querySelector('.input');

let container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    if(!isNaN(+e.target.textContent)){   
        if(operator === ' '){
            operand = 1;
            secondValue = '';
            firstValue += e.target.textContent;
            console.log(`firstValue = ${+firstValue}`);
            updateInput();
        } else {
            operand = 2;
            secondValue += e.target.textContent;
            console.log(`secondValue = ${+secondValue}`);
            updateInput();
        }
    } else if (e.target.textContent === 'C' || e.target.textContent === 'CE') {
        if (e.target.textContent === 'C'){
            operand = 1;
            firstValue = '';
            secondValue = '';
            operator = ' ';
            updateInput();
        } else {
            if (operand === 1){
                firstValue = '';
                updateInput();
            } else {
                secondValue = '';
                updateInput();
            }
        }
    } else if(e.target.textContent !== '=' && operator === ' '){
        operator = e.target.textContent;
        updateInput();
    } else {
        if(e.target.textContent === '='){
            resultInput(operate(+firstValue, +secondValue, operator), ' ');
        } else {
            resultInput(operate(+firstValue, +secondValue, operator), e.target.textContent);
        }
    }
    

});

