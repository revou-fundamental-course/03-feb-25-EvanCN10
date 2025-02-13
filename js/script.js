// ini file java script

console.log("Hello World");

function validateForm() {
  let input = document.getElementById("main-input");
  console.log(input.value);

  if (input.value == "") {
    alert("Form must be filled out");
  } else {
    let result = convertToFahrenheit(input.value);

    document.getElementById("main-result").value = result;
    document.getElementById("how-result").value =
      input.value + "°C" + " * 9 / 5 + 32";
    console.log("Validating Form");
  }
}

let convertToFahrenheit = (input) => {
  return (input * 9) / 5 + 32;
};

function resetForm() {
  document.getElementById("main-input").value = "";
  document.getElementById("main-result").value = "";
  document.getElementById("how-result").value = "";
  console.log("Resetting Form");
}

function reverseForm() {
  let input = document.getElementById("main-input").value;
  let result = document.getElementById("main-result").value;

  document.getElementById("main-input").value = result;
  document.getElementById("main-result").value = input;
  console.log("Reversing Form");
}
