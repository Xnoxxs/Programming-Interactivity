document.addEventListener('DOMContentLoaded', () => {
    // Canvas 1 - Draw Random Circles on Click
    const canvas1 = document.getElementById('canvas1');
    const ctx1 = canvas1.getContext('2d');
    canvas1.width = 500;
    canvas1.height = 300;

    canvas1.addEventListener('click', () => {
        drawRandomCircles(ctx1);
    });

    function drawRandomCircles(ctx) {
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * ctx.canvas.width;
            const y = Math.random() * ctx.canvas.height;
            const radius = 20;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }
    }

    // Canvas 2 - Flowing Circles on Mouse Move
    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = 500;
    canvas2.height = 300;

    let isDrawingOnCanvas2 = false;

    canvas2.addEventListener('mouseenter', () => {
        isDrawingOnCanvas2 = true;
    });
    canvas2.addEventListener('mouseleave', () => {
        isDrawingOnCanvas2 = false;
    });
    canvas2.addEventListener('mousemove', (event) => {
        if (isDrawingOnCanvas2) {
            const rect = canvas2.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            drawFlowingCircle(ctx2, x, y);
        }
    });

    function drawFlowingCircle(ctx, x, y) {
        const radius = 20;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }

    // Canvas 3 - Flowing Triangles on Mouse Move
    const canvas3 = document.getElementById('canvas3');
    const ctx3 = canvas3.getContext('2d');
    canvas3.width = 500;
    canvas3.height = 300;

    let isDrawingOnCanvas3 = false;

    canvas3.addEventListener('mouseenter', () => {
        isDrawingOnCanvas3 = true;
    });
    canvas3.addEventListener('mouseleave', () => {
        isDrawingOnCanvas3 = false;
    });
    canvas3.addEventListener('mousemove', (event) => {
        if (isDrawingOnCanvas3) {
            const rect = canvas3.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            drawFlowingTriangle(ctx3, x, y);
        }
    });

    function drawFlowingTriangle(ctx, x, y) {
        const size = 20; // Length of the triangle's side
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y + size);
        ctx.lineTo(x - size, y + size);
        ctx.closePath();

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Helper function to get a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Canvas 4 - Draw Random Sized Squares on Click
    const canvas4 = document.getElementById('canvas4');
    const ctx4 = canvas4.getContext('2d');
    canvas4.width = 500;
    canvas4.height = 300;

    canvas4.addEventListener('click', (event) => {
        const rect = canvas4.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const shapeSize = getRandomNumber(50, 100); // Get a random size between 50 and 100
        drawSquare(ctx4, x, y, shapeSize);
    });

    function drawSquare(ctx, x, y, size) {
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // Helper function to get a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Canvas 5 - Draw Stars on Click
    const canvas5 = document.getElementById('canvas5');
    const ctx5 = canvas5.getContext('2d');
    canvas5.width = 500;
    canvas5.height = 300;

    canvas5.addEventListener('click', (event) => {
        const rect = canvas5.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const starSize = getRandomNumber(15, 30); 
        drawStar(ctx5, x, y, starSize, 5, 0.5); 
    });

    function drawStar(ctx, x, y, radius, points, inset) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        for (let i = 0; i < 2 * points; i++) {
            const angle = i * Math.PI / points;
            const length = i % 2 === 0 ? radius : radius * inset;
            const dx = x + Math.sin(angle) * length;
            const dy = y - Math.cos(angle) * length;
            ctx.lineTo(dx, dy);
        }
        ctx.closePath();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
});
