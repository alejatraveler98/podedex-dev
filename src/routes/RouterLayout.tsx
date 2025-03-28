import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App.tsx";
import Pokemon from "../pages/pokemon.tsx";

const RouterLayout = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path:"/pokemon/:id",
        element: <Pokemon/>
    }
])

export default RouterLayout