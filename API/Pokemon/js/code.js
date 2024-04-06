const obtenerPokemones = async(urlApiP = 'https://pokeapi.co/api/v2/pokemon') => {
    let htmlContenido = document.querySelector("#contenido")
    htmlContenido.innerHTML = ''
    try {
        let dataPokemones = await fetch(urlApiP)
        dataPokemones = await dataPokemones.json()
        let arrPokemones = dataPokemones.results
        const infoPokemones = []
        
        for (const data of arrPokemones) {
            let info = await obtenerInfoPokemon(data.url)
            infoPokemones.push(info)
        }

        infoPokemones.forEach(pokemonn => {
            htmlContenido.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${pokemonn.sprites.other.home.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pokemonn.name}</h5>
                        </div>
                    </div>
                </div>
                `
        });
        let disabledBtnAnt = (dataPokemones.previous == null) ? 'disabled' : ''
        let disabledBtnSig = (dataPokemones.next == null) ? 'disabled' : ''

        document.querySelector("#divPaginacion").innerHTML = `
            <button class="btn btn-dark type="button" ${disabledBtnAnt} data-url="${dataPokemones.previous}">Anterior</button>
            <button class="btn btn-dark type="button" ${disabledBtnSig} data-url="${dataPokemones.next}">Siguiente</button>
        `
        asignarEventosPaginacion()
    } catch (error) {
        if (!busqueda) {
            htmlContenido.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Ah ocurrido algo! comunícate con el administrador
            </div>
            `
        } else {
            htmlContenido.innerHTML = `
            <div class="alert alert-warning" role="alert">
                No existen coincidencias
            </div>
        `
        }
        console.log(error)
    }
}
obtenerPokemones()

function asignarEventosPaginacion() {
    let botones = document.querySelectorAll("[data-url]")
    botones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault()
            obtenerPokemones(evento.target.dataset.url)
        })
    });
}

async function obtenerInfoPokemon(urlPokemon) {
    try {
        let dataPokemon = await fetch(urlPokemon)
        dataPokemon = await dataPokemon.json()
        return dataPokemon
    } catch (error) {
        console.error("PASO ALGO -> ", error)
    }
}