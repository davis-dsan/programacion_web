const numeros=Array(2,6,5,8,15,20)
const nImpares=Array()
const nPares=Array()
for (let i = 0; i <= numeros.length; i++) {
        if (numeros[i]%2===0) {
            nPares.push(numeros[i]);
            
        }else{
        nImpares.push(numeros[i]);
        }
        console.log(nPares); 
    console.log(nImpares);
}