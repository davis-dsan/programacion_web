
let numeros = [];
let nPares = [];
let nImpares = [];

// PARA PARES
for (let i = 0; i <= 20; i++) {
  numeros[i] = i;

  if (i % 2 === 0) {
    let p = i;
    nPares.push(p);
  }
}

console.log("Números pares:");
for (let j = 0; j < nPares.length; j++) {
  console.log(nPares[j]);
}

// PARA IMPARES
for (let i = 0; i <= 20; i++) {
  numeros[i] = i;

  if (i % 2 !== 0) {
    let x = i;
    nImpares.push(x);
  }
}

console.log("Números impares:");
for (let k = 0; k < nImpares.length; k++) {
  console.log(nImpares[k]);
}
