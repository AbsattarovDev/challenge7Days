let firstNum = +prompt("Enter the first number:"); 
let secondNum = +prompt("Enter the second number:");
let operator = prompt("Enter an operator(+, -, *, /):");

let result;

// Solution with using If-else.
if (operator == "+") {
    result = firstNum + secondNum;
} else if (operator == "-"){
    result = firstNum - secondNum;
} else if (operator == "*"){
    result = firstNum * secondNum;
} else if (operator == "/"){
    result = secondNum !== 0 ? firstNum / secondNum : "Cannot divide by zero!";
} else {
    result = "Invalid Input!";
}

// Solution with using Switch.
// switch (operator) {
//     case "+":
//         result = firstNum + secondNum;
//         break;
//     case "-":
//         result = firstNum - secondNum;
//         break; 
//     case "*":
//         result = firstNum * secondNum;
//         break;
//     case "/":
//         result = secondNum !== 0 ? firstNum / secondNum : "Cannot divide by zero!";
//         break;  
//     default:
//         result = "Invalid Input!";
//         break;
// }

console.log(`Result: ${result}`);
