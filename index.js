function convertToCelsius(tempInFarenheit) {
  return (tempInFarenheit - 32) / 1.8;
}

function describeTemperature(tempInFarenheit) {
  const tempInCelsius = convertToCelsius(tempInFarenheit);
  let result;

  if (tempInCelsius < 0) {
    result = "The weather is very cold.";
  } else if (tempInCelsius < 20) {
    result = "The weather is cold.";
  } else if (tempInCelsius < 30) {
    result = "The weather is warm.";
  } else if (tempInCelsius < 40) {
    result = "The weather is hot.";
  } else {
    result = "The weather is very hot.";
  }

  return result;
}

const tempInFarenheit = parseInt(prompt("Enter a temperature in Fahrenheit: "));
const tempInCelsius = convertToCelsius(tempInFarenheit);
const description = describeTemperature(tempInFarenheit);
alert(`${tempInFarenheit}°F is ${tempInCelsius}°C. ${description}`);
