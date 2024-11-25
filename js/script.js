
 
 // Obtener el elemento canvas y su contexto 2D
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");


 // Definir el nombre a mostrar
 var nombre = "Guadalupe Cano Moyano";

 // Definir las propiedades de la fuente
 ctx.font = "40px Arial";
 ctx.textAlign = "center";
 ctx.fillStyle = "#D14D72";
 
 // Definir la posición inicial de la primera letra
 var x = canvas.width / 9 - 60;
 var y = canvas.height / 3 + 8;

 // Animar las letras del nombre
 var index = 0;
 var interval = setInterval(function() {
 


   // Dibujar el triángulo
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ctx.lineTo(100, 75);
   ctx.lineTo(50, 100);
   ctx.fill();
   ctx.closePath();
   ctx.stroke();

   // Dibujar las letras del nombre
   for (var i = 0; i <= index; i++) {
     ctx.fillText(nombre[i], x + i * 30, y);
   }

   // Aumentar el índice de letra para la siguiente iteración
   index++;

   // Detener la animación cuando se hayan mostrado todas las letras
   if (index === nombre.length) {
     clearInterval(interval);
   }
 }, 500);