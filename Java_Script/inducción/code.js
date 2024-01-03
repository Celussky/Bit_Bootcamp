let nombre = prompt("Digite su nombre:")
let sexo = prompt ("Digite su sexo:")

sexo = sexo.toLowerCase()

if (sexo == "hombre") {
    console.log("Hola " + nombre + ", te ganaste una 🍺")
} else if (sexo == "mujer"){
    console.log("Hola " + nombre + ", te ganaste una 🍔")
} else {
    console.error("Sapo 🐸🤡")
}

// let nombrePersona = prompt ("Digite su nombre:")
// let apellidoPersona = prompt ("Digite su apellido:")
// let edadPersona = prompt ("Digite su edad:")
// let rhPersona = prompt ("Digite su rh:")
// let generoPersona = prompt ("Digite su género:")

// let persona = {
//     nombre: nombrePersona,
//     apellido: apellidoPersona,
//     edad: edadPersona,
//     rh: rhPersona,
//     genero: generoPersona,
// }

// console.log(persona)