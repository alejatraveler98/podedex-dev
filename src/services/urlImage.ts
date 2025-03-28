export function urlImage(id:number) {
    const pokemonId = id.toString().padStart(3, '0')
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${pokemonId}.png`
}