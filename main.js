//-----------------ARROW FUNCTION--------------------
//-----------------BEFORE ES6

//FUNCTION DECLARATION
function functionDeclaration() {
  return "From Function Declaration";
}
console.log(functionDeclaration());


//FUNCTION EXPRESSION
const functionExpression = function () {
  return 'From Function Expression'
}
console.log(functionExpression());


//Moder Js/ ES6
//IF ONLY ONE PARAMETER
// const arrowFunction = (a) => `Number is ${a}`;
// console.log(arrowFunction(12));

//IF MULTIPLE PARAMETERS
const arrowFunction = (a, b) => {
  const sum = a + b;
  return `Sum is ${sum}`;
}

console.log(arrowFunction(12, 12));
