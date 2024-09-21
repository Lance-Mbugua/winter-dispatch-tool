// Listen for form submission
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const weatherType = document.getElementById('weather-type').value;
    const accumulation = parseFloat(document.getElementById('accumulation').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    // Initialize output message
    let outputMessage = '';

    // Logic for Snow
    if (weatherType === 'snow') {
        if (accumulation <= 2.0) {
            outputMessage = temperature < -15 
                ? '1 plow truck, 1 sand truck (light), 1 salt truck (light)' 
                : 'No action required';
        } else if (accumulation > 2.0 && accumulation <= 5.75) {
            outputMessage = temperature < -15 
                ? '1 plow truck, 1 sand truck (normal), 1 salt truck (normal)' 
                : 'No action required';
        } else if (accumulation > 5.75 && accumulation <= 15.5) {
            outputMessage = '11 plow trucks, 11 sand trucks (normal), 1 salt truck';
        } else if (accumulation > 15.5 && accumulation <= 42.5) {
            outputMessage = '21 plow trucks, 21 sand trucks (normal), 2 salt trucks';
        } else {
            outputMessage = 'State of emergency: Organize army and other jurisdiction support';
        }
    }

    // Logic for Ice
    if (weatherType === 'ice') {
        if (accumulation <= 3.0) {
            outputMessage = 'No action required';
        } else if (accumulation > 3.0 && accumulation <= 5.5) {
            outputMessage = '1 sand truck (normal), 1 salt truck (normal)';
        } else if (accumulation > 5.5 && accumulation <= 17.0) {
            outputMessage = '2 sand trucks (heavy), 2 salt trucks (heavy), 1 plow truck (heavy)';
        } else {
            outputMessage = 'State of emergency: Organize army and other jurisdiction support';
        }
    }

    // Logic for Mixed (Snow and Ice)
    if (weatherType === 'mixed') {
        if (accumulation <= 3.5) {
            outputMessage = 'No action required';
        } else if (accumulation > 3.5 && accumulation <= 5.75) {
            outputMessage = '11 plow trucks (light), 11 sand trucks (light), 1 salt truck';
        } else if (accumulation > 5.75 && accumulation <= 16.5) {
            outputMessage = '11 plow trucks (heavy), 11 sand trucks (heavy), 11 salt trucks (normal)';
        } else if (accumulation > 16.5 && accumulation <= 40.0) {
            outputMessage = '21 plow trucks (heavy), 21 sand trucks (heavy), 21 salt trucks (light)';
        } else {
            outputMessage = 'State of emergency: Organize army and other jurisdiction support';
        }
    }

    // Display output in the result div
    document.getElementById('output').innerHTML = `<p>${outputMessage}</p>`;
});
