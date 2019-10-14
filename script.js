const numButtons = document.querySelectorAll('.num');
const textField = document.querySelector('#textField');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');
textField.value = ' ';;
let numbers = [];
let displayValue = textField.value;
equal.addEventListener('click',(e) => {

});
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        textField.value += button.textContent;
    });
});
numButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        textField.value += button.textContent;
        displayValue = textField.value;
        skewer.log(displayValue);

    });
});

function add() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
function subtract() {
    let subtract = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
       subtract -= arguments[i];
    }
    return subtract;

}
function multiply() {
    let product = 1;
    for(let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;;
}

function divide() {
    let divide = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        divide /= arguments[i];
    }
    return divide;
}

function operate(operator,num1,num2) {
    switch(operator) {
    case '+':
        return add(num1,num2);
        break;
    case '-':
        return subtract(num1,num2);
        break;
    case '*':
        return multiply(num1,num2);
        break;
    case '/':
        return divide(num1,num2);
        break;
    default:
        return -1;
    }
  
}

function appendNumbers() {

}

function removeWhiteSpace(string) {
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        if(string.charAt[i] == ' ') {
            continue;
        }
        newString += string.charAt[i];
    }
    return newString;

}
function evaluate(string) {
    let displayValue =  removeWhiteSpace(textField.value);
    let answer = 0;
    let operations = [];
    let num = '';
    string += '=';
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == '+' || string.charAt(i) == '-' ||
           string.charAt(i) == '/' || string.charAt(i) == '*') {
            numbers.push(parseInt(num));
            operations.push(string.charAt(i));
            num = ' ';
            continue;
        } else if(string.charAt(i) == '=')
        {
            numbers.push(parseInt(num));
        }
            num += string.charAt(i);
    }

     return operateAll(operations,numbers);
}
function operateAll(operations,arrayOfNumbers) {
    let a = 1;
    let sum = arrayOfNumbers[0];;
    for(let i = 0; i < operations.length; i++) {
        sum = operate(operations[i],sum,arrayOfNumbers[a]);
        a++;
       
    }
    return sum;

}

skewer.log(evaluate('45+45+30*100'));