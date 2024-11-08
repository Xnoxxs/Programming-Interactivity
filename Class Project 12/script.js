// Selecting necessary elements
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidthSlider = document.getElementById('lineWidth');
const clearButton = document.getElementById('clearButton');
const colorDisplay = document.getElementById('colorDisplay');

// Initial configurations
let isMouseDown = false;
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = lineWidthSlider.value;
colorDisplay.style.backgroundColor = colorPicker.value; // Set initial color

// Function to draw a line
const drawLine = (x, y) => {
    ctx.lineTo(x, y);
    ctx.stroke();
};

// Mouse down event - start a new path
canvas.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    ctx.beginPath(); // Start a new path
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.moveTo(x, y); // Move to the current mouse position
});

// Mouse up event - stop drawing
canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// Mouse move event - draw if mouse is down
canvas.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        drawLine(x, y);
    }
});

// Open color picker
colorDisplay.addEventListener('click', () => {
    colorPicker.click(); // Simulate a click on the hidden color input
});

// Choose new color and update color display
colorPicker.addEventListener('change', () => {
    ctx.strokeStyle = colorPicker.value;
    colorDisplay.style.backgroundColor = colorPicker.value; // Update color display
});

// Line width slider event - change line width
lineWidthSlider.addEventListener('input', () => {
    ctx.lineWidth = lineWidthSlider.value;
});

// Clear button - clear the entire canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
