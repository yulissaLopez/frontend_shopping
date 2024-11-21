import { Outlet } from "react-router-dom";

export default function PrivateLayout(){
    return (
        <div>
            <h1>Titulo de rutas privadas</h1>
            <Outlet />
        </div>
    )
}