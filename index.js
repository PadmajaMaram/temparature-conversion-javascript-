// Get references (connections) to HTML elements by their IDs
const mytext = document.getElementById("mytext"); // Input box for entering temperature value
const toFahrenheit = document.getElementById("toFahrenheit"); // Radio button for Celsius → Fahrenheit
const celsius = document.getElementById("celsius"); // Radio button for Fahrenheit → Celsius
const result = document.getElementById("result"); // Paragraph to show the final converted result

let temp; // Variable to store the temperature value temporarily

// This function runs when the user clicks the "Submit" button
function convert() {
  // If the "Celsius → Fahrenheit" radio button is selected
  if (toFahrenheit.checked) {
    temp = Number(mytext.value); // Get the number entered in the input box
    temp = (temp * 9) / 5 + 32; // Convert Celsius to Fahrenheit using the formula
    result.textContent = temp.toFixed(1) + "°F"; // Display result with one decimal and °F symbol
  }

  // If the "Fahrenheit → Celsius" radio button is selected
  else if (celsius.checked) {
    temp = Number(mytext.value); // Get the number entered in the input box
    temp = (temp - 32) * (5 / 9); // Convert Fahrenheit to Celsius using the formula
    result.textContent = temp.toFixed(1) + "°C"; // Display result with one decimal and °C symbol
  }

  // If the user hasn’t selected any option
  else {
    result.textContent = "Please select a unit"; // Show message to select a conversion type
  }
}
