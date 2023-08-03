const express = require('express');
const app = express();

// Función para calcular la Serie de Taylor de e^x alrededor de x=0
function calcularSerieTaylor(x, n) {
  let resultado = 0;
  for (let i = 0; i < n; i++) {
    resultado += (Math.pow(x, i) / factorial(i));
  }
  return resultado;
}

// Función para calcular el factorial de un número
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Ruta que recibe el valor de 'x' y la cantidad de términos 'n' como parámetros de consulta
app.get('/serie-taylor', function(req, res) {
  const x = parseFloat(req.query.x);
  const n = parseInt(req.query.n);

  if (isNaN(x) || isNaN(n) || n < 0) {
    res.status(400).json({ error: 'Por favor, ingrese valores válidos para x y n (n debe ser un número entero no negativo).' });
    return;
  }

  const resultado = calcularSerieTaylor(x, n);

  res.json({
    x,
    n,
    resultado,
  });
});

// Iniciando el servidor y escuchando en el puerto 3000
app.listen(3000, function(){
  console.log("Escuchando en el puerto 3000");
});
