 //grab calculator elements

const display_value = document.querySelector('.bottom-right-output');
//grab operand buttons
const operandButtons = document.querySelectorAll('button[type="operand"]');
//grab operator buttons
const operatorButtons = document.querySelectorAll('button[type="operatorbutton"]');


//grab clear, allclear and equals buttons
 const clear = document.getElementById('clearbutton');
 const equals = document.getElementById('equalbutton');
 const allclear = document.getElementById('allclearbutton');

 //using math evaluate instead of eval() function

//get user input 
 let userInput = [];
 //add event listeners
//log some text when operand button clicked
 for (const button of operandButtons) {
    button.addEventListener('click', () => {
      console.log(button.value);
    });
  }

  //log some text when operator button clicked
  for (const button of operatorButtons) {
    button.addEventListener('click', () => {
      console.log(button.value);
    });
  }
 
  //handle operand numbers button click
  operandButtons.forEach((number) => {
   number.addEventListener('click', (e) => {

    // Check if decimal point is already present
    if (e.target.value === '.' && userInput.includes('.')) {
      return;}
    //if something exist on display delete it
    if (display_value.textContent && display_value.textContent === "0.") {
        display_value.textContent = display_value.textContent.slice(0, -2);
      }

       number = e.target.value;
       userInput.push(number);
       console.log(userInput);
       
console.log(typeof(number));
     display_value.textContent += e.target.value;
     //console.log(typeof(e.target.value));
   })
 })

//handle operatore button click
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.value);
    userInput.push(button.value);
    console.log(userInput);
    display_value.textContent += button.value;
    
     
  });
});


//handle clear button click, when clicked only clear one element from the right side
clear.addEventListener('click', () => {
  display_value.textContent = display_value.textContent.slice(0, -1);
  userInput.pop();
  console.log(userInput);
});

//handle allclear button click, when clicked clear everything
allclear.addEventListener('click', () => {
  display_value.textContent = "0.";
  userInput = [];
  console.log(userInput);
})

//handle equals button click
equals.addEventListener('click', () => {
  try {
    // Use the eval() function for simplicity (since it's a calculator app)
    const result = eval(userInput.join(''));

    // Check for valid result
    if (!isNaN(result) && isFinite(result)) {
        display_value.textContent = result;
    } else {
        display_value.textContent = 'Error';
    }
} catch (error) {
    display_value.textContent = 'Error';
}

userInput = [];
});

document.addEventListener('keydown', (event) => {
  let key = event.key;
  const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', 'Enter'];

  if (key === 'Enter') {
    event.preventDefault();
    
    equals.click();
  }

  if (validKeys.includes(key)) {
    document.querySelector(`button[value="${key}"]`).click();
  }
});
