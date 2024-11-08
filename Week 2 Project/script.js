let conversionCount = 0; // Keeps track of the number of conversions

// Function to perform conversions based on the type passed
function convert(type) {
    let result;
    let input;
    switch (type) {
        case 'cToF':
            input = parseFloat(document.getElementById('celsius').value);
            result = (input * 9/5) + 32;
            addToHistory(`${input}°C is ${result.toFixed(2)}°F`);
            break;
        case 'fToC':
            input = parseFloat(document.getElementById('fahrenheit').value);
            result = (input - 32) * 5/9;
            addToHistory(`${input}°F is ${result.toFixed(2)}°C`);
            break;
        case 'mToKm':
            input = parseFloat(document.getElementById('miles').value);
            result = input * 1.60934;
            addToHistory(`${input} miles is ${result.toFixed(2)} km`);
            break;
        case 'kmToM':
            input = parseFloat(document.getElementById('kilometers').value);
            result = input / 1.60934;
            addToHistory(`${input} km is ${result.toFixed(2)} miles`);
            break;
        default:
            return;
    }
}

// Adds the conversion result to the history section
function addToHistory(text) {
    const historyDiv = document.getElementById('history');
    const historyItem = document.createElement('div'); // Create a new div for the history item
    historyItem.className = 'history-item'; // Assign the class for styling and animation
    historyItem.innerText = text; // Set the text content of the history item
    historyDiv.prepend(historyItem); // Add the new history item to the top of the history list
    
    // Update the conversion count
    conversionCount++;
    document.getElementById('conversion-count').innerText = conversionCount;
}

// Enables conversion with the "Enter" key
function submitOnEnter(event, type) {
    if (event.key === 'Enter') {
        convert(type); // Calls the convert function with the specific type
    }
}
