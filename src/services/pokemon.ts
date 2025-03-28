
import {pokemonData} from "../types/pokemon.ts";

export const adaptPokemonDataFromApi = (pokemonData:pokemonData) => {
    console.log(pokemonData.base_experience);
    return {
        id: pokemonData.id,
        name: pokemonData.name,
        weight: pokemonData.weight,
        height: pokemonData.height,
        types: pokemonData.types,
        baseExperience: pokemonData.base_experience,
    };
}