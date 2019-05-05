var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

// Cabeza
lienzo.beginPath();
lienzo.strokeStyle = "pink";
lienzo.lineWidth = 2;
lienzo.moveTo(150, 0); //punto de inicio
lienzo.lineTo(100, 150); //punto a trazar
lienzo.lineTo(200, 150); //punto a trazar de nuevo
lienzo.lineTo(150, 0); //punto a trazar de nuevo
lienzo.stroke();
lienzo.fillStyle = "pink";
lienzo.fill();
lienzo.closePath();

// Torso
lienzo.beginPath();
lienzo.strokeStyle = "pink";
lienzo.moveTo(100, 150);
lienzo.lineTo(0, 210);
lienzo.lineTo(100, 200);
lienzo.lineTo(95, 220);
lienzo.lineTo(215, 220);
lienzo.lineTo(213, 200);
lienzo.lineTo(300, 210);
lienzo.lineTo(200, 150);
lienzo.stroke();
lienzo.fill()
lienzo.closePath();

//Piernitas
lienzo.beginPath();
lienzo.strokeStyle = "pink";
lienzo.moveTo(90, 270);
lienzo.lineTo(115, 300);
lienzo.lineTo(140, 270);
lienzo.moveTo(160, 270);
lienzo.lineTo(190, 300);
lienzo.lineTo(220, 270);
lienzo.stroke();
lienzo.fillStyle = "pink";
lienzo.fill()
lienzo.closePath();

//Short
lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(95, 220);
lienzo.lineTo(90, 270);
lienzo.lineTo(140, 270);
lienzo.lineTo(140, 260);
lienzo.lineTo(160, 260);
lienzo.lineTo(160, 270);
lienzo.lineTo(220, 270);
lienzo.lineTo(215, 220);
lienzo.stroke();
lienzo.fillStyle = "#8DD603";
lienzo.fill()
lienzo.closePath();

//ojos del patricio
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.ellipse(135, 100, 5, 10, Math.PI / 80, 0, 4 * Math.PI);
lienzo.stroke();
lienzo.fillStyle = "white";
lienzo.fill();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.ellipse(165, 100, 5, 10, Math.PI / 80, 0, 4 * Math.PI);
lienzo.stroke();
lienzo.fillStyle = "white";
lienzo.fill();
lienzo.closePath();

// Pupilas
lienzo.beginPath();
lienzo.strokeStyle = "black";
lienzo.ellipse(135, 100, 2, 4, Math.PI / 80, 0, 4 * Math.PI);
lienzo.stroke();
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "black";
lienzo.ellipse(165, 100, 2, 4, Math.PI / 80, 0, 4 * Math.PI);
lienzo.stroke();
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();

//Boca
lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(140, 140);
lienzo.bezierCurveTo(140, 150, 160, 150, 160, 140);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "black";
lienzo.moveTo(140, 80);
lienzo.lineTo(130, 82);
lienzo.moveTo(160, 80);
lienzo.lineTo(170, 82);
lienzo.stroke();
lienzo.closePath();
