// Obtener el elemento canvas y su contexto 2D
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var nombre = "Guadalupe Cano Moyano";

// Definir las propiedades de la fuente
ctx.font = "40px Arial";
ctx.textAlign = "center";
ctx.fillStyle = "#D14D72";

// Calcular el centro del canvas
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Calcular la posición inicial considerando el ancho total del texto
var espaciadoLetras = 30;
var anchoTotal = nombre.length * espaciadoLetras;
var x = centerX - (anchoTotal / 2) + (espaciadoLetras / 2);
var y = centerY;

// Calcular la posición del triángulo (a la izquierda del texto)
var triangleX = x - 50; 

// Animar las letras del nombre
var index = 0;
var interval = setInterval(function() {
    // Limpiar el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el triángulo a la izquierda
    ctx.beginPath();
    ctx.moveTo(triangleX - 25, centerY - 20); // Reducimos altura superior
    ctx.lineTo(triangleX + 25, centerY);      // Mantenemos punto central
    ctx.lineTo(triangleX - 25, centerY + 20); // Reducimos altura inferior
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    // Dibujar las letras del nombre
    for (var i = 0; i <= index; i++) {
        ctx.fillText(nombre[i], x + i * espaciadoLetras, y);
    }

    index++;

    if (index === nombre.length) {
        clearInterval(interval);
    }
}, 500);