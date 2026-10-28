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
        operand = 1;
    } else {
        operator = ' ';
        secondValue = res;
        firstValue = ' ';
        operand = 2;
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

// Keybard interpretation for main function
function getPressedKey(e){
    console.log(e);
    if((+e.key >= 0 && +e.key <= 9)
    || e.key === '+'
    || e.key === '-'
    || e.key === '*'
    || e.key === '/'
    || e.key === '='
    || e.key === '.'){
        let result = {target: {
            textContent: e.key,
            classList: {value: ' '},
        },};
        mainFunction(result);
    }
    if(e.key === 'Enter'){
        let result = {target: {
            textContent: '=',
            classList: {value: ' '},
        },};
        mainFunction(result);
    }
    if(e.key === 'Backspace'){
        let result = {target: {
            textContent: 'CE',
            classList: {value: ' '},
        },};
        mainFunction(result);
    }
    if(e.key === 'Delete'){
        let result = {target: {
            textContent: 'C',
            classList: {value: ' '},
        },};
        mainFunction(result);
    }

}

function mainFunction(input){
    if(input.target.classList.value !== 'input'){
        input = input.target.textContent;
        
        console.log(input);
        if(!isNaN(+input) || input === '.'){   
            if(operator === ' '){
                getFirstNumber(input);
            } else {
                getSecondNumber(input);
            }
        } else if (input === 'C' || input === 'CE') {
            if (input === 'C'){
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
                    operand = 3;
                    secondValue = ' ';
                    updateInput();
                } else {
                    operator = ' ';
                    operand = 1;
                    updateInput();
                }
            }
        } else if(input !== '=' && operator === ' '){
            
            if(secondValue === ' '){
                operator = input;
                operand = 3;
                updateInput();
            } else {
                // to replace values after result culculations and operator entering
                firstValue = secondValue;
                secondValue = ' ';
                operator = input;
                operand = 3;
                updateInput();
            }
        } else {
            if (secondValue === ' '){
                
            } else if(input === '='){
                resultInput(operate(+firstValue, +secondValue, operator), ' ');
            } else {
                resultInput(operate(+firstValue, +secondValue, operator), input);
            }
        }
    }
    

}

let firstValue = ' ';
let secondValue = ' ';
let operator = ' ';
let operand = 1;

let input = document.querySelector('.input');

let container = document.querySelector('.container');

container.addEventListener('mouseup', mainFunction);
document.addEventListener('keydown', getPressedKey);

