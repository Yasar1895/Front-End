const display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0" && num !== ".") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + op;
  } else {
    display.innerText += op;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}
