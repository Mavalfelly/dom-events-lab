/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let numberOne = ''
let numberTwo = ''
let operator
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    });
  });



/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        display.append(event.target.innerText)
        if(operator){
            numberTwo += event.target.innerText
        }else{
            numberOne += event.target.innerText
        }
        
    }

    if (event.target.classList.contains('operator')) {
        operator = event.target.innerText
        display.textContent = ''

    }

    if (event.target.classList.contains('equals')){
        if(!numberTwo) return;

        if (operator === '*') {
            display.textContent = parseInt(numberOne) * parseInt(numberTwo)
        }
        if (operator === '/') {
            if (numberTwo === '0'){
                display.textContent = 'Divide by Zero Error'
            }else{
                display.textContent = parseInt(numberOne) / parseInt(numberTwo)
            }
        }
        if (operator === '+') {
            display.textContent = parseInt(numberOne) + parseInt(numberTwo)
        }
        if (operator === '-') {
            display.textContent = parseInt(numberOne) - parseInt(numberTwo)
        }
    }
    if (event.target.innerText === 'C') {
        numberOne = ''
       numberTwo = ''
       operator = ''
  }   
})

