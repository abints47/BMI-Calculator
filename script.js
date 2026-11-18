const submitButton = document.getElementById("submitBtn");

function saveTask() {
  const height = document.getElementById("height-value").value;
  const weight = document.getElementById("weight-value").value;

  console.log(height, weight);
  let hSquare = height * height;
  let value = weight / hSquare;
  let bmi = value * 10000;
    console.log(bmi);
  if(bmi < 18.5){
    console.log("Underweight");
  }else if(bmi < 24.9 && bmi > 18.5){
    console.log("Healthy weight")
  }else if(bmi < 29.9 && bmi > 25.0){
    console.log("Overweight");
  }else if(bmi < 40.0 && bmi > 30.0){
    console.log("Obesity");
  }
}



submitButton.addEventListener("click", () => {
  saveTask();
  alert("Button clicked");
});
