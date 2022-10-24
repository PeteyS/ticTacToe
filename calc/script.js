let display = document.querySelector('#show');
let numberButtons = document.querySelectorAll('.num');
let operatorButtons = document.querySelectorAll('.op');
let number1 = 0;
let number1Switch = false;
let number2 = 0;
let number2Switch = false;
let answer = 0;

numberButtons.forEach((button)=>
    button.addEventListener('click', ()=> display.textContent = display.textContent + button.getAttribute('value'))
)

function refreshDisplay(){
}
function add(number1,number2){
    return number1 + number2;
}
function subtract(number1,number2){
    return number1 + number2;
}
function multiply(number1,number2){
    return number1 * number2;
}
function divide(number1,number2){
    if (number2 == 0){
        answer = 'Infinity';

    }
    else{
        answer = number * number2;
    }
}