import {createContext, useEffect, useState} from "react";
import addIndexToResults from "../services/addIndexToResults.ts";
import usePokemon from "../hooks/usePokemon.ts";
import {PokemonesItem} from "../types/pokemon.ts";

export const PokemonContext = createContext(null);

export function PokemonProvider({children}) {
    //No implemente una paginación pero la idea con el hook es permitir hacerlo, solo se tendria que
    //ajustar el parametro del limit
    const {data, error, loading} = usePokemon('https://pokeapi.co/api/v2/pokemon?limit=151')
    const [pokemones, setPokemons] = useState<PokemonesItem[]>([])
    const [pokemonesFilter, setPokemonsFilter] = useState<PokemonesItem[]>([])
    const [search, setSearch] = useState<string>('')
    const urlImage = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"
    useEffect(() => {
        if (data?.results) {
            const resultsData = addIndexToResults(data.results)
            setPokemons(resultsData)
            setPokemonsFilter(resultsData)
        }
    }, [data])

    useEffect(() => {
        const pokemonesFiltrados = pokemones.filter(pokemon => pokemon.name.includes(search))
        setPokemonsFilter(pokemonesFiltrados)
    }, [search]);

    const value = {
        data,
        error,
        loading,
        pokemones,
        pokemonesFilter,
        search,
        setSearch,
        urlImage,
    };

    return(

        <PokemonContext.Provider value={value}>
            {
                children
            }
        </PokemonContext.Provider>
    )
}