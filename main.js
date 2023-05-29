import {
    buscarTodosLosPokemon,buscarPokemonPorNombre} from "./api.js";

const root = document.getElementById("root");

async function mostrarPokemones() {

    const pokemones = await buscarTodosLosPokemon();

    for (let i = 0; i < pokemones.length; i++) {
        const pokemon = pokemones[i];

        root.innerHTML += `<div class="card">
        <img src="${pokemon.imagen}"/>
        <div class="card-content">
        <span id="name">${pokemon.nombre}</span>
        <span>${pokemon.tipo}</span>
        <span>${pokemon.especie}</span>
        </div>
        </div>`

    }

}
mostrarPokemones()


const buscador = document.getElementById("buscador");

buscador.addEventListener("submit", async (e) => {
    e.preventDefault();

    root.innerHTML = `<img src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif"/>`
    
    const nombreDelPokemon = document.getElementById("input-buscar").value;
    
    const pokemones = await buscarPokemonPorNombre(nombreDelPokemon)
    
    root.innerHTML = "";
    
        for (let i = 0; i < pokemones.length; i++) {
            const pokemon = pokemones[i];
            
            root.innerHTML += `<div class="card">
            <img src="${pokemon.imagen}"/>
            <div class="card-content">
            <span id="name">${pokemon.nombre}</span>
            <span>${pokemon.tipo}</span>
            <span>${pokemon.especie}</span>
            </div>
            </div>`
        }
    
})



