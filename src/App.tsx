import './App.css'
import {Link} from "react-router-dom";
import {usePokemonContext} from "./hooks/usePokemonContext.ts";
import {Loading} from "./components/Loading.tsx";


function App() {
    const { pokemonesFilter, loading, error, setSearch, urlImage, search } = usePokemonContext();
    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error al cargar el Pokémon: {error}</div>;
    }


    return (
        <div className=''>
            <div className='p-5'>
                <div className='flex gap-5 justify-center mb-5'>
                    <h2 className='text-white text-6xl font-bold'>POKEDEX</h2>
                    <img className="w-16" src="/img/pokeball-pokemon.svg" alt="Pokedex" />
                </div>
                <div>
                    <input
                        type="text"
                        value={search}
                        placeholder={'Buscar el pokemon'}
                        className='bg-white w-3/4 mx-auto block p-2 rounded-md mb-5'
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </div>


                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
                    {
                        pokemonesFilter && (
                            pokemonesFilter.map((pokemon, index) => {
                                    index = index + 1
                                    const urlIndex = pokemon.index.toString().padStart(3, '0')
                                    return (
                                        <Link to={`/pokemon/${pokemon.index}`} key={index}>
                                            <div className='bg-[#B3A12599] rounded-md p-2' key={index}>
                                                <img className='mx-auto' src={`${urlImage}${urlIndex}.png`} alt={pokemon.name}/>
                                                <div className='text-center font-bold uppercase text-white text-xl'>{pokemon.name}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            )
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default App
