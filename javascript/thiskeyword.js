function calci(num1, num2, x, num3 = null) {
  let result = 0;
  function add(num1, num2) {
    let result = add(num1 + num2);
    console.log(result);
  }

  function areaSqure(num1, num2) {
    let result = num1 ** 2;
    console.log(result);
  }

  function sub(num1, num2) {
    let result = sub(num1, num2);
    console.log(result);
  }

  function multiply(num1, num2) {
    let result = multiply(num1, num2);
    console.log(result);
  }

  function divide(num1, num2) {
    let result = divide(num1, num2);
    console.log(result);
  }
  switch (x) {
    case "+":
      add(num1, num2);

    case "-":
      sub(num1, num2);
      break;

    case "*":
      multiply(num1, num2);

      break;
    case "/":
      divide(num1, num2);

      break;
    case "area":
      areaSqure(num1, num2);

      break;
    default:
      break;
  }
}
calci(19, 4, "sub");
// var ttt = calci(1, 4, "+");
// console.log(ttt);

// calci(1, 4, "+", 10);

// function agecalculator(params) {}
