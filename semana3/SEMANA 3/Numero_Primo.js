const numeros=Array(2,6,7,5,8,15,20,11);
const nPrimos=Array();

for (let i = 0; i < numeros.length; i++) {
  const contar = numeros[i];
  let NumeroPrimo = true;

  if (contar <= 1) {
    NumeroPrimo = false;
  } else {
    for (let j = 2; j <= Math.sqrt(contar); j++) {
      if (contar % j === 0) {
        NumeroPrimo = false;
            }
    }
  }

  if (NumeroPrimo === true) {
    nPrimos.push(contar);
            }
}
console.log(nPrimos)