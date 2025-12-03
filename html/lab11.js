const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let brushColor = document.getElementById("colorPicker").value;
let brushSize = document.getElementById("sizePicker").value;

// Start drawing
canvas.addEventListener("mousedown", () => {
  drawing = true;
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

// For drawing on canvas
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";

  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
});

// Update brush color & size
document.getElementById("colorPicker").addEventListener("change", (e) => {
  brushColor = e.target.value;
});
document.getElementById("sizePicker").addEventListener("input", (e) => {
  brushSize = e.target.value;
});

// Clear canvas
document.getElementById("clearBtn").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save canvas as image
document.getElementById("saveBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});
