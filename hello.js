/* let secretNumber = Math.floor(Math.random() *10+1)

let number = prompt('Adivina el numero secreto entre (0 y 10)')
console.log(number) */

//Si el numero secreto es igual al numero que ingresaste Ganaste
//Si el numero secreto es mayor al que ingresaste Perdiste
//Si el numero secreto es menor al que ingresaste perdiste

/* if(number == secretNumber){
    console.log('GANASTE')
} else if (number <= secretNumber) {
    console.log("ES MENOR AL NUMERO SECRETO")
} else {
    console.log("ES MAYOR AL NUMERO SECRETO")
} */

   /*  let curso = prompt("Selecciona un curso (HTML, CSS, JAVASCRIPT):").toUpperCase();

// Validar la entrada
if (curso === "HTML" || curso === "CSS" || curso === "JAVASCRIPT") {
    alert("Has seleccionado el curso: " + curso);
} else {
    alert("Entrada no válida. Por favor, selecciona un curso válido.");
    solicitarCurso(); // Volver a solicitar la entrada
}
 */
let curso = prompt("Selecciona un curso:\n1. HTML\n2. CSS\n3. JAVASCRIPT");

            // Convertir la entrada a número entero
            curso = parseInt(curso, 10);

            // Validar la entrada
            switch (curso) {
                case 1:
                    alert("Has seleccionado el curso: HTML");
                    break;
                case 2:
                    alert("Has seleccionado el curso: CSS");
                    break;
                case 3:
                    alert("Has seleccionado el curso: JAVASCRIPT");
                    break;
                default:
                    alert("Entrada no válida. Por favor, selecciona un número entre 1 y 3.");
                    solicitarCurso(); // Volver a solicitar la entrada
            }