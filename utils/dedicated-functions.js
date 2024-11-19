import calculatorState from "./calculator-state.js";

/**
 * Updates the calculator display with the provided inputs.
 *
 * @param {...string} rest - A variable number of strings to
 * display, typically operands and operators.
 * @returns {void} This function does not return a value. It
 * updates the `display` element and joins the string with space inbetween`.
 */
export function displayOnScreen(...rest){
 calculatorState.expression = display.textContent = `${rest.join(' ')}`
}

/**
 * updates the values of the operands in the calcuatorState
 * @param {string} number- The number clicked by user
 * 
 * @returns {void} - this function does not return any value
 */
export function pressNumber(number){
 const{firstOperand,secondOperand,operator} = calculatorState
 if(!operator){
  calculatorState.firstOperand += number
  displayOnScreen(calculatorState.firstOperand)
 }
 else{
  calculatorState.secondOperand += number
  displayOnScreen(calculatorState.firstOperand, calculatorState.operator, calculatorState.secondOperand);
 }
}

/**
 * Updates the value of the operator on the CalculatorState Object and
 * ensures operator cannot be input twice in one operation
 * 
 * @param {string} op- operator input by user
 * @returns {void} 
 */
export function pressOperator(op){
 const { firstOperand, secondOperand, operator } = calculatorState;
 if (!firstOperand){
  calculatorState.firstOperand = 0
  displayOnScreen(calculatorState.firstOperand);
 }
 if ((operator && !secondOperand) || (firstOperand && operator && secondOperand)) return;
 calculatorState.operator = op
 displayOnScreen(calculatorState.firstOperand, calculatorState.operator);
}