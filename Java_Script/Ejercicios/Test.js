// Primer ejercicio :
// let numero = "3"
// if (numero == 0) {
//     console.log("El número es cero")
// } else {
//     if (numero % 2 == 0) {
//         console.log("El número es par")
//     } else {
//         console.log("El número es impar")
//     }
// }
//

// Segundo ejercicio: 
//
// let calculo = ""
// for (let x = 0; x < 100; x++) {
//     if(x<10){
//         calculo += `0${x},`
//     }else{
//         calculo += `${x},`
//     }
// }
// console.log(calculo)

// Tercer ejercicio:

let linea = '';
for (let x = 0; x < 10; x++) {
    for (let i = 0; i < 10; i++) {
        linea += '*';
    }
    linea += '\n'
}
console.log(linea);
