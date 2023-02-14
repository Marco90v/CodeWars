/**
    Write function bmi that calculates body mass index (bmi = weight / height2).
    if bmi <= 18.5 return "Underweight"
    if bmi <= 25.0 return "Normal"
    if bmi <= 30.0 return "Overweight"
    if bmi > 30 return "Obese" 
*/
function bmi(weight, height) {
    const bmi = weight / Math.pow(height,2).toFixed(2);
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    if (bmi > 30) return "Obese";
}
const res0 = bmi(80,1.80);
console.log(res0);