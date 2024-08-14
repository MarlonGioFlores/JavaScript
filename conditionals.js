let age = 25

if(age >= 18){
    console.log('Eres mayor de edad')
} else{
    console.log('Eres menor de edad')
}

//Ternario
age >= 18 ? console.log('Eres mayor de edad'): console.log('Eres menor de edad')

//Variable notas si la nota es igual o mayor a nueve 9 excelente
//Si la nota es mayor o igual a 6 aprobado
//Si la nota es menor a 6 reprobado

let nota = 8

if(nota < 6){
    console.log('REPROBADO')
}else {
    console.log('APROBADO')
}

//Definir una variable que contenga una letra de A a la D
//Si la variable tiene el valor 'B' o 'b' imprimir en pantalla has pulsado la
//Letra B

let letra = 'a'

if (letra == 'B' || letra == 'b'){
    console.log(`Has pulsado la letra: ${letra}`)
}