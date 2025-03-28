import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {pokemonData} from "../types/pokemon.ts";
import usePokemon from "../hooks/usePokemon.ts";
import {adaptPokemonDataFromApi} from '../services/pokemon.ts'
import {hectogramosAKilogramos} from "../services/hectogramosAKilogramos.ts";
import {urlImage} from "../services/urlImage.ts";
import Atropos from 'atropos/react';
import "../components/Pokemon.css"
import {Loading} from "../components/Loading.tsx";
import {decimetersToMeters} from "../services/decimetersToMeters.ts";




function Pokemon() {
    const params = useParams();
    const pokemonId = params.id;
    const [pokemon, setPokemon] = useState<pokemonData | undefined>()
    const {data, loading, error} = usePokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    useEffect(() => {
        if (data) {
            console.log('data???',data)
            setPokemon(adaptPokemonDataFromApi(data))
        }
    }, [data]);

    if(loading) {
        <Loading/>
    }
    if (error) {
        <div>JSON.stringify(error)</div>
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center text-white gap-5">
            <div className='flex gap-5 relative'>
                <Link to={'/'}>
                    <div className='absolute left-1/2 -translate-x-1/2 top-[-100%] bg-white text-black font-bold p-2 rounded-md'>
                        Regresar
                    </div>
                </Link>
                <h2 className='text-white text-6xl font-bold'>POKEDEX</h2>
                <img className="w-16" src="/img/pokeball-pokemon.svg" alt="Pokedex" />
            </div>
            {
                pokemon && (
                    <div className=''>
                        <div>
                            <Atropos
                                shadow={false}
                                activeOffset={40}
                                shadowScale={1.05}
                                className="`md:w-3/4 mx-auto h-auto md:h-[450px] cursor-pointer">
                                <div className={`pokemon-card p-5 h-full`}>
                                    <div className='h-full content p-2'>
                                        <div className='h-full flex flex-col justify-evenly items-center p-5'>
                                            <div
                                                className="absolute w-1/2 rotate-45 h-[300%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#41b3ff00] via-[#b0a9ff13] to-[#41b3ff00]"></div>
                                            <h2 className='text-2xl md:text-5xl uppercase text-center font-bold'>{pokemon.name}</h2>
                                            <div className='flex flex-col md:flex-row items-center justify-evenly'>
                                                <img
                                                    className='w-[250px] h-[250px] object-cover'
                                                    src={`${urlImage(pokemon.id)}`}
                                                    alt={pokemon.name}/>
                                                <div>
                                                    <div className='flex flex-col md:flex-row gap-1 md:gap-8 flex-wrap mb-8'>
                                                        <p className={'description'}>
                                                            <span className='name'>Weight</span>
                                                            <span>{hectogramosAKilogramos(pokemon.weight)} KG</span>
                                                        </p>
                                                        <p className={'description'}>
                                                            <span className='name'>Height</span>
                                                            <span>{decimetersToMeters(pokemon.height)} M</span>
                                                        </p>
                                                        <p className={'description'}>
                                                            <span className='name'>Base Experiencie</span>
                                                            <span>{pokemon.baseExperience}</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className='description'>Types</p>
                                                        <div className='flex gap-4 flex-wrap '>
                                                            {pokemon.types && (
                                                                pokemon.types.map((type) => (
                                                                    <div className='py-1 px-5 bg-white text-black font-bold rounded-md'>
                                                                        {type.type.name}</div>
                                                                ))
                                                            )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Atropos>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Pokemon;