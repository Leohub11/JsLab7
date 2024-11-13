function getOperands() {
  const operandA = document.getElementById("input_a").value;
  const operandB = document.getElementById("input_b").value;

  // Validate inputs
  if (
    isNaN(operandA) ||
    isNaN(operandB) ||
    operandA.trim() === "" ||
    operandB.trim() === ""
  ) {
    alert("Please enter valid numbers for both operands.");
    return null;
  }

  return {
    a: parseInt(operandA, 10),
    b: parseInt(operandB, 10),
  };
}

function addValue() {
  const operands = getOperands();
  if (!operands) return;

  const result = operands.a + operands.b;
  const outputMessage = `${operands.a} + ${operands.b} = ${result}\n`;
  updateOutput(outputMessage);
}

function mulValue() {
  const operands = getOperands();
  if (!operands) return;

  const result = operands.a * operands.b;
  const outputMessage = `${operands.a} × ${operands.b} = ${result}\n`;
  updateOutput(outputMessage);
}

function divValue() {
  const operands = getOperands();
  if (!operands) return;

  if (operands.b === 0) {
    alert("Division by zero is not allowed.");
    return;
  }

  const result = (operands.a / operands.b).toFixed(2);
  const outputMessage = `${operands.a} ÷ ${operands.b} = ${result}\n`;
  updateOutput(outputMessage);
}

function updateOutput(message) {
  const textarea = document.forms["my_calculator"].elements["output"];
  textarea.value += message;
  console.log(message);
}
