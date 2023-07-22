function calcularPromedio() {
    // Datos que coloca el usuario
    const notasPrimerParcial = [
        parseFloat(document.getElementById("nota1_parcial1").value),
        parseFloat(document.getElementById("nota2_parcial1").value),
        parseFloat(document.getElementById("nota3_parcial1").value)
    ];

    const notasSegundoParcial = [
        parseFloat(document.getElementById("nota1_parcial2").value),
        parseFloat(document.getElementById("nota2_parcial2").value),
        parseFloat(document.getElementById("nota3_parcial2").value)
    ];

    const notaExamenFinal = parseFloat(document.getElementById("nota_examen_final").value);

    // Promedio de los parciales
    const promedioPrimerParcial = notasPrimerParcial.reduce((a, b) => a + b, 0) / notasPrimerParcial.length;
    const promedioSegundoParcial = notasSegundoParcial.reduce((a, b) => a + b, 0) / notasSegundoParcial.length;

    // Promedio Total
    const promedioTotal = (promedioPrimerParcial + promedioSegundoParcial + notaExamenFinal) / 3;

    // Tipo de Categoria
    let categoria = "";
    if (promedioTotal >= 9.5) {
        categoria = "Exonerado";
    } else if (promedioTotal >= 7) {
        categoria = "Aprobado";
    } else if (promedioTotal >= 4) {
        categoria = "Supletorio";
    } else {
        categoria = "Reprobado";
    }

    // Resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Promedio: ${promedioTotal.toFixed(2)} - Categoría: ${categoria}`;
}