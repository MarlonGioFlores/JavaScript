let secretNumber = Math.floor(Math.random *10+1)

let number = prompt('Adivina el numero secreto entre (0 y 10)')
console.log(number)

//Si el numero secreto es igual al numero que ingresaste Ganaste
//Si el numero secreto es mayor al que ingresaste Perdiste
//Si el numero secreto es menor al que ingresaste perdiste

if(number == secretNumber){
    console.log('GANASTE')
} else if (number <= secretNumber) {
    console.log("ES MENOR AL NUMERO SECRETO")
} else {
    console.log("ES MAYOR AL NUMERO SECRETO")
}