let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let ageInput = document.getElementById("ageInput");
let putton = document.getElementById("myPutton");

let output = document.getElementById("output");
let bmiOutput = document.getElementById("bmi");

let storedValues = {
  height: "",
  weight: "",
  age: "",
};

putton.addEventListener("click", () => {
  let calories =
    (parseInt(storedValues.weight) *
      parseInt(storedValues.height) *
      parseInt(storedValues.age)) /
    100;
  alert(calories);
});

function updateOutput() {
  output.innerText = `Your inputs are: age: ${storedValues.age}, height: ${storedValues.height} and weight: ${storedValues.weight}`;
}

heightInput.addEventListener("keyup", (event) => {
  storedValues.height = event.target.value;
  updateOutput();
  calculateBmi();
});

weightInput.addEventListener("keyup", (event) => {
  storedValues.weight = event.target.value;

  updateOutput();
  calculateBmi();
});

ageInput.addEventListener("keyup", (event) => {
  storedValues.age = event.target.value;

  updateOutput();
  calculateBmi();
});

function calculateBmi() {
  let bmi =
    (parseInt(storedValues.height) *
      parseInt(storedValues.weight) *
      parseInt(storedValues.age)) /
    100;
  console.log(typeof bmi);

  storedValues.age !== "" &&
  storedValues.height !== "" &&
  storedValues.weight !== ""
    ? (bmiOutput.innerText = bmi)
    : (bmiOutput.innerText = "we need all inputs");
}

// height * weight * age / 100
