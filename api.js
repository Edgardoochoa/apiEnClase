const url = "https://pokeapi.co/api/v2"

export async function buscarTodosLosPokemon() {
    const data = await fetch(`${url}/pokemon`);
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson.results;

    const resultadosFormateados = []

    for (let i = 0; i < resultadosObtenidos.length; i++) {
        const pokemon = resultadosObtenidos[i];
        
        let url = pokemon.url;
    
        const data = await fetch(url);
        const dataJson = await data.json();
    
        const pokemonFormateados = {
            nombre: dataJson.name,
            tipo: dataJson.types.map((slot)=> slot.type.name),
            habilidad: dataJson.abilities.map((slot)=> slot.ability.name),
            imagen: dataJson.sprites.other.dream_world.front_default,
            especie: dataJson.species.name
        }   
        resultadosFormateados.push(pokemonFormateados)
    }

    console.log(resultadosFormateados);
    return resultadosFormateados

}


export async function buscarPokemonPorNombre(nombreDelPokemon) {
    const data = await fetch(`${url}/pokemon/?name=${nombreDelPokemon}`);
    const dataJson = await data.json();
    const resultadosObtenidos = dataJson.results;
    
    const resultadosFormateados = []


    for (let i = 0; i < resultadosObtenidos.length; i++) {
        const pokemon = resultadosObtenidos[i];
        
        let url = pokemon.url;
    
        const data = await fetch(url);
        const dataJson = await data.json();
    
        const pokemonFormateados = {
            nombre: dataJson.name,
            tipo: dataJson.types.map((slot)=> slot.type.name),
            habilidad: dataJson.abilities.map((slot)=> slot.ability.name),
            imagen: dataJson.sprites.other.dream_world.front_default,
            especie: dataJson.species.name
        } 
        resultadosFormateados.push(pokemonFormateados); 
    }
    
    console.log(resultadosFormateados);
    return resultadosFormateados
}        






