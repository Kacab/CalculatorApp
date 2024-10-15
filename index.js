let y  = document.querySelector('#input')
let buttons = document.querySelectorAll('.all-buts button');
let clr = document.querySelector('#clear')

clr.addEventListener('click',function(){
    console.log('submit')
   cl()
})

function cl(){
    y.value=''
    
}


    


let firstNumber = null;  // Store the first number
let operator = null;     // Store the operator (+)
let secondNumber = null; // Store the second number

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonValue = button.value;
        
       // If button clicked is a number, display it in the input
        if (!isNaN(buttonValue)) {
            y.value += buttonValue;
        } else if (buttonValue === '+') {
            firstNumber = Number(y.value); // Save the first number
            operator = '+';                // Save the operator
            y.value = '';                  // Clear the input for the next number
        } else if (buttonValue === '=') {
            secondNumber = Number(y.value);  // Save the second number
            if (operator === '+') {          // Perform addition if the operator is '+'
                y.value = firstNumber + secondNumber;
            }
        }

        // if (!isNaN(buttonValue)) {
        //     y.value += buttonValue;
        // }
        let op = document.querySelector('#but14')
        op.value='/'
      if(buttonValue===op.value){
        firstNumber = Number(y.value); // Save the first number
        operator = op.value;                // Save the operator
        y.value = '';  
      } else if(buttonValue==='='){
        secondNumber = Number(y.value);  // Save the second number
        if (operator === op.value) {          // Perform addition if the operator is '+'
            y.value = firstNumber / secondNumber;
        }
      }
       if (buttonValue === 'x') {
        firstNumber = Number(y.value); // Save the first number
        operator = 'x';                // Save the operator
        y.value = '';                  // Clear the input for the next number
    } else if (buttonValue === '=') {
        secondNumber = Number(y.value);  // Save the second number
        if (operator === 'x') {          // Perform addition if the operator is '+'
            y.value = firstNumber * secondNumber;
        }
    }

    if (buttonValue === '-') {
        firstNumber = Number(y.value); // Save the first number
        operator = '-';                // Save the operator
        y.value = '';                  // Clear the input for the next number
    } else if (buttonValue === '=') {
        secondNumber = Number(y.value);  // Save the second number
        if (operator === '-') {          // Perform addition if the operator is '+'
            y.value = firstNumber - secondNumber;
        }
    }

    });
});