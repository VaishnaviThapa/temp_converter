function convertCelsiusToFahrenheit(){
    var CelsiusInput = document.getElementById("Celsius").value;
    var FahrenheitOutput = (CelsiusInput * 9/5)+32;
    document.getElementById("Fahrenheit").value = FahrenheitOutput.toFixed(2);
}

function convertFahrenhritToCelsius(){
    var FahrenheitInput =document.getElementById("Fahrenheit").value;
    var CelsiusOutput = (FahrenheitInput - 32) *5/9;
    document.getElementById("Celsius").value = CelsiusOutput.toFixed(2);
    
}