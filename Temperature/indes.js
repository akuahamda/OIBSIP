function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let output;

    if (unitSelect === 'celsius') {
        output = (inputTemp * 9/5) + 32; // Convert Celsius to Fahrenheit
        document.getElementById('output').innerText = `${inputTemp}°C = ${output.toFixed(2)}°F`;
    } else if (unitSelect === 'fahrenheit') {
        output = (inputTemp - 32) * 5/9; // Convert Fahrenheit to Celsius
        document.getElementById('output').innerText = `${inputTemp}°F = ${output.toFixed(2)}°C`;
    }
}
