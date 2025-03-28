import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'atropos/css'
import { RouterProvider} from "react-router-dom";
import RouterLayout from "./routes/RouterLayout.tsx";
import {PokemonProvider} from "./context/contextPokemon.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonProvider>
        <RouterProvider router={RouterLayout}/>
    </PokemonProvider>
  </StrictMode>,
)
