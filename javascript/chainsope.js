function calculator(num1, num2, op) {
  if (op === "+") {
    console.log(num1 + num2);
  } else if (op === "-") {
    console.log(num1 - num2);
  } else if (op === "*") {
    console.log(num1 * num2);
  } else if (op === "/") {
    console.log(num1 / num2);
  } else {
    console.log("Syntax Error");
  }
}
calculator(10, 4, "=");
