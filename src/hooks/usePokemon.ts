import {useState, useEffect} from "react";
import APIResponse from "../types/apiResponse.ts";



function usePokemon(url:string) {
    const [data, setData] = useState<APIResponse>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function fetchData() {
            if (!url) return;

            setLoading(true);
            setError(null);
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw new Error(`Error en la petición: ${res.status}`);
                    }
                    setLoading(false);
                    return res.json()
                })
                .then((dataResponse:APIResponse) => {
                    setLoading(false);
                    setData(dataResponse)
                }).catch(err => {
                setError(err.message);
                setLoading(false);
            });
        }
        fetchData();
    },[url])


    return { data, error, loading};
}

export default usePokemon ;