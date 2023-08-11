document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    const convertBtn = document.getElementById("convertBtn");

    function convertToKelvin(celsius) {
        return celsius + 273.15;
    }

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    convertBtn.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        let kelvinValue;

        if (!isNaN(celsiusValue)) {
            // Convert Celsius to Fahrenheit and Kelvin
            const fahrenheitResult = convertToFahrenheit(celsiusValue);
            kelvinValue = convertToKelvin(celsiusValue);

            fahrenheitInput.value = fahrenheitResult.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
        } else if (!isNaN(fahrenheitValue)) {
            // Convert Fahrenheit to Celsius and Kelvin
            const celsiusResult = convertToCelsius(fahrenheitValue);
            kelvinValue = convertToKelvin(celsiusResult);

            celsiusInput.value = celsiusResult.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
        }
    });
});
