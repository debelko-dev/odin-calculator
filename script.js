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

function updateInput(){
    input.textContent = `${firstValue} ${operator} ${secondValue}`;
}

function resultInput(res){
    operator = ' ';
    secondValue = ''
    firstValue = res;
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
    } else if(e.target.textContent !== '='){
        operator = e.target.textContent;
        updateInput();
    } else {
        switch (operator) {
            case '+':
                resultInput(add(+firstValue, +secondValue));
                break;
        
            case '-':
                resultInput(subtract(+firstValue, +secondValue));
                break;
            
            case '*':
                resultInput(multiply(+firstValue, +secondValue));
                break;
            case '/':
                resultInput(divide(+firstValue, +secondValue));
                break;
        }
    }
    

});

