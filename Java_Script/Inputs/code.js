function guardar_informacion() {

    let iNombre = document.getElementById("txtNombre")
    let iApellido = document.getElementById("txtApellido")
    let iEdad = document.getElementById("txtEdad")
    let iGenero = document.getElementById("txtGenero")
    let iRh = document.getElementById("txtRh")

    if (iNombre.value != '' && iApellido.value != '' && iEdad.value != '' && iGenero.value != '' && iRh.value != '') {
        let persona = {
            nombre: iNombre.value,
            apellido: iApellido.value,
            edad: iEdad.value,
            genero: iGenero.value,
            rh: iRh.value
        }
        console.log(persona)
    } else {
        alert ("El formulario tiene campos vacíos.")
    }
}