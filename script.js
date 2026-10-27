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
    if (oper !== ' '){
        operator = oper;
        secondValue = ' ';
        firstValue = res;
    } else {
        operator = ' ';
        secondValue = res;
        firstValue = ' ';
    }
    if (res === Infinity || res === -Infinity){
        secondValue = `Nice try!`;
        firstValue = ' ';
    }

    input.textContent = `${firstValue} ${operator} ${secondValue}`;
} 

function getSecondNumber(string){
    if (secondValue.includes('.' && string === '.')){
        //i do not want to do anything with this))
    } else {
        operand = 2;
        secondValue += string;
        console.log(`secondValue = ${+secondValue}`);
        updateInput();
    }
}

function getFirstNumber(string){
    if (firstValue.includes('.') && string === '.'){
    
    } else {
        operand = 1;
        secondValue = ' ';
        firstValue += string;
        console.log(`firstValue = ${+firstValue}`);
        updateInput();
}
    }
    

let firstValue = ' ';
let secondValue = ' ';
let operator = ' ';
let operand = 1;

let input = document.querySelector('.input');

let container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    if(!isNaN(+e.target.textContent) || e.target.textContent === '.'){   
        if(operator === ' '){
            getFirstNumber(e.target.textContent);
        } else {
            getSecondNumber(e.target.textContent);
        }
    } else if (e.target.textContent === 'C' || e.target.textContent === 'CE') {
        if (e.target.textContent === 'C'){
            operand = 1;
            firstValue = ' ';
            secondValue = ' ';
            operator = ' ';
            updateInput();
        } else {
            if (operand === 1){
                firstValue = ' ';
                updateInput();
            } else if (operand === 2){
                secondValue = ' ';
                updateInput();
            } else {
                operator = ' ';
                updateInput();
            }
        }
    } else if(e.target.textContent !== '=' && operator === ' '){
        
        if(secondValue === ' '){
            operator = e.target.textContent;
            operand = 3;
            updateInput();
        } else {
            // to replace values after result culculations and operator entering
            firstValue = secondValue;
            secondValue = ' ';
            operator = e.target.textContent;
            operand = 3;
            updateInput();
        }
    } else {
        if (secondValue === ' '){
            
        } else if(e.target.textContent === '='){
            resultInput(operate(+firstValue, +secondValue, operator), ' ');
        } else {
            resultInput(operate(+firstValue, +secondValue, operator), e.target.textContent);
        }
    }
    

});

