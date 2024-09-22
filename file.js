// Function to determine the trucks and application rates based on input
function determineTrucks(weatherType, accumulation, temperature) {
    let message = "";

    // Logic for SNOW
    if (weatherType === "snow") {
        if (temperature < -15) {
            if (accumulation <= 2.0) {
                message = "1 plow truck, 1 sand truck (Light)";
            } else if (accumulation <= 5.75) {
                message = "1 plow truck, 1 sand truck (Normal)";
            } else if (accumulation <= 15.5) {
                message = "1 plow truck, 1 salt truck (Normal)";
            } else if (accumulation <= 42.5) {
                message = "2 plow trucks, 2 salt trucks (Normal)";
            } else {
                message = "State of emergency! Organize army and other jurisdiction support.";
            }
        } else if (temperature >= -15 && temperature <= -7) {
            if (accumulation <= 2.0) {
                message = "1 plow truck, 1 sand truck (Light)";
            } else if (accumulation <= 5.75) {
                message = "1 plow truck, 1 sand truck (Normal)";
            } else if (accumulation <= 15.5) {
                message = "1 plow truck, 1 salt truck (Normal)";
            } else if (accumulation <= 42.5) {
                message = "2 plow trucks, 2 salt trucks (Normal)";
            } else {
                message = "State of emergency! Organize army and other jurisdiction support.";
            }
        } else if (temperature > -7) {
            message = "No action required.";
        }
    }

    // Logic for ICE
    else if (weatherType === "ice") {
        if (accumulation <= 3.0) {
            message = "No action required.";
        } else if (accumulation <= 5.5) {
            message = "1 sand truck (Normal), 1 salt truck (Normal)";
        } else if (accumulation <= 17.0) {
            message = "2 sand trucks (Heavy), 2 salt trucks (Heavy), 1 plow truck (Heavy)";
        } else {
            message = "State of emergency! Organize army and other jurisdiction support.";
        }
    }

    // Logic for MIXED (snow and ice)
    else if (weatherType === "mixed") {
        if (accumulation <= 3.5) {
            message = "No action required.";
        } else if (accumulation <= 5.75) {
            message = "1 plow truck, 1 sand truck (Light), 1 salt truck (Light)";
        } else if (accumulation <= 16.5) {
            message = "1 plow truck, 1 sand truck (Heavy), 1 salt truck (Heavy)";
        } else if (accumulation <= 40.0) {
            message = "2 plow trucks, 2 sand trucks (Heavy), 2 salt trucks (Light)";
        } else {
            message = "State of emergency! Organize army and other jurisdiction support.";
        }
    }

    return message;
}

// Function to capture user input and display the result
function getWeatherInputs() {
    const weatherType = document.getElementById("weatherType").value;
    const accumulation = parseFloat(document.getElementById("accumulation").value);
    const temperature = parseFloat(document.getElementById("temperature").value);

    const truckMessage = determineTrucks(weatherType, accumulation, temperature);
    document.getElementById("result").innerText = truckMessage;
}
