function calculate(a, b, op){
 switch (op) {
  case "+":
   return a + b;
  case "-":
   return a - b;
  case "×":
   return a * b;
  case "÷":
   return b === 0 ? "Error" : a / b;
  case "%":
   return a % b;
  default:
   return 0;
 }
}

export default calculate;