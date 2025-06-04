function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = "Please enter valid values!";
    result.style.color = "red";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obesity";

  result.style.color = "#111";
  result.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Category: <strong>${category}</strong>`;
}
