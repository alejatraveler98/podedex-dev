interface PokemonesItem{
    name:string;
    url:string;
}

interface pokemonData {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: [];
    base_experience: number;
}


export type { PokemonesItem, pokemonData };