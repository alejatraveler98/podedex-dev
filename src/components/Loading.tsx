export function Loading() {
    return (
        <div className='fixed h-full w-full flex items-center justify-center'>
            <div className='flex gap-5 justify-center mb-5'>
                <h2 className='text-white text-6xl font-bold'>Cargando...</h2>
                <img className="w-16" src="/img/pokeball-pokemon.svg" alt="Pokedex"/>
            </div>
        </div>
    )
}