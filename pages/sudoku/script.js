const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("descrease");
const sizeEl = document.getElementById("size");
const clearButton = document.getElementById("clearIcon");
const colorSelector = document.getElementById("colorSelector");

let size = 10;
let isPressed = false;
let color = "#000";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mouseleave", () => {
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEl.textContent = size;
}

increaseButton.addEventListener("click", () => {
    size += 2;

    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseButton.addEventListener("click", () => {
    size -= 2;
    if (size - 2 < 2) {
        size = 2;
    }
    updateSizeOnScreen();
});

colorSelector.addEventListener("change", (e) => {
    color = e.target.value;
});

clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    let isDrawing = false;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("touchstart", startDrawing);

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);

    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("touchend", stopDrawing);

    document.getElementById("clearButton").addEventListener("click", clearCanvas);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        e.preventDefault();

        let x, y;
        if (e.type === "touchstart" || e.type === "touchmove") {
            x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
            y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
        } else {
            x = e.offsetX;
            y = e.offsetY;
        }

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});