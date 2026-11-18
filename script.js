const submitButton = document.getElementById("submitBtn");

const label = document.getElementById("label");

const noValue = document.getElementById("novalue");

function saveTask() {
  const height = document.getElementById("height-value").value;
  const weight = document.getElementById("weight-value").value;

  console.log(height, weight);
  let hSquare = height * height;
  let value = weight / hSquare;
  let bmi = value * 10000;


  let result = Math.trunc(bmi * 1000) / 1000;
    console.log(result);


  let category = "";


  if(bmi < 18.5){
    category ="Underwight";
  }else if(bmi < 24.9 && bmi > 18.5){
    category ="Healthy weight";
  }else if(bmi < 29.9 && bmi > 25.0){
    category ="Over Weight";
  }else if(bmi < 40.0 && bmi > 30.0){
    category ="Obesity";
  }

  display(result, category);
}

function display(result, category){
    label.innerHTML = `Your BMI is <strong>${result} </strong>  (${category})`;
    
}


submitButton.addEventListener("click", () => {
  saveTask();
});
