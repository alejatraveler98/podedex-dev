import {PokemonesItem} from "../types/pokemon.ts";
function addIndexToResults (results: PokemonesItem[]){
    return results.map(items  => {
        const url = items.url;
        const partes = url.split('/');
        const numero = partes[partes.length - 2];
        return { ...items, index: numero  }

    })
}

export default addIndexToResults;