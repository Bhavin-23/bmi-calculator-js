 function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.innerHTML = " Please enter valid weight and height.";
    result.className = "bmi-red";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let message = "";
  let className = "";

  if (bmi < 18.5) {
    message = `Underweight ❗ (BMI: ${bmi})`;
    className = "bmi-red";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = `Normal Weight ✅ (BMI: ${bmi})`;
    className = "bmi-green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message = `Overweight ⚠️ (BMI: ${bmi})`;
    className = "bmi-yellow";
  } else {
    message = `Obese 🚨 (BMI: ${bmi})`;
    className = "bmi-red";
  }

  result.innerHTML = message;
  result.className = className;
}
