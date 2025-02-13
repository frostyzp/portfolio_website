let isDrawing = false;
let x = 0;
let y = 0;

const drawingArea = document.getElementById('drawing-area');
const canvas = document.createElement('canvas');
canvas.width = drawingArea.offsetWidth;
canvas.height = drawingArea.offsetHeight;
drawingArea.appendChild(canvas);

const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [x, y] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});