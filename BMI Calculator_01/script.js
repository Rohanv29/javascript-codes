const calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", () => {

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
        return;
    }

    if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let category = "";

    if (bmi < 18.6) {
        category = "Underweight";
    } else if (bmi <= 24.9) {
        category = "Normal";
    } else {
        category = "Overweight";
    }

    result.innerHTML = `
        Your BMI is <strong>${bmi}</strong><br>
        Category: <strong>${category}</strong>
    `;
});