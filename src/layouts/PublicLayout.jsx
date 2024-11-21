import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PublicLayout(){
    const {tokens, user} = useAuth()

    if (tokens.accessToken && user) {
        return <Navigate to={"/app/dashboard"} replace />
    }
    return (
        <div>
            <h1>Titulo de rutas publicas</h1>
            <Outlet />
        </div>
    )
}