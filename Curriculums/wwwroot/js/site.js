// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');
// Dibujar un rectángulo rojo en el canvas

// Establecer ando de linea
ctx.lineWidth = 3;*/

// Muro
/*ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(30, 90);
ctx.lineTo(90, 90);
ctx.lineTo(90, 30);
ctx.closePath();
ctx.stroke();*/
/*ctx.strokeRect(0, 0, 310, 438);

const centerX = 60
const centerY = 60
const radius = 30;
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 400);
ctx.closePath();
ctx.stroke();*/


const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

// Configuración de estilo
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'aquamarine';
ctx.fillRect(0, 0, canvas.width/3, canvas.height);



//Imagen
make_base();
function make_base() {
    base_image = new Image();
    base_image.src = 'C:\\Users\\TecNo\\Desktop\\COSAS\\MIAS\\CURRICULUM_WEB\\PersonsAI\\AIPerson_1.jpeg';
    base_image.onload = function () {
        context.drawImage(base_image, 0, 0);
    }
}
// Secciones
const secciones = ['EXPERIENCIA', 'EDUCACIÓN', 'HABILIDADES'];

ctx.fillStyle = 'black';
ctx.font = 'bold 10px Arial';
let y = 100; // Posición vertical inicial de las secciones

secciones.forEach((seccion) => {
    ctx.fillText(seccion, canvas.width/3 + 20, y);
    y += 30; // Incremento en la posición vertical
});

// Información Personal
ctx.font = '10px Arial';
y = 100;

ctx.fillText('Nombre:', 10, y);
ctx.fillText('Correo:', 10, y + 30);
ctx.fillText('Teléfono:', 10, y + 60);

// Experiencia Laboral
y += 110;

ctx.fillText('Experiencia Laboral', 50, y);

// ... Continúa con el diseño de las otras secciones

// Línea divisoria
ctx.beginPath();
ctx.moveTo(50, canvas.height - 50);
ctx.lineTo(canvas.width - 50, canvas.height - 50);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();