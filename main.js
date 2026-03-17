function getOperater() {
  //Put code here
  return operater;
}
function getAnswer() {
  var result = document.getElementById("answer");
  var number1 = Number(document.getElementById("1").textContent);
  var number2 = Number(document.getElementById("2").textContent);
  var operater = getOperater();
  if (operater === "addition") {
    var answer = number1 + number2;
    result.textContent = answer;
  } else if (operater === "subtraction") {
    var answer = number1 - number2;
    result.textContent = answer;
  } else if (operater === "division") {
    var answer = number1 / number2;
    result.textContent = answer;
  } else if (operater === "multiplication") {
    var answer = number1 * number2;
    result.textContent = answer;
  } else {
    console.error("Unknown operator."):
  }
}
