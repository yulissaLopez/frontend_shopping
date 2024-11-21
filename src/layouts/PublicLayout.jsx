import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PublicLayout(){
    const {tokens, user} = useAuth()

    if (tokens.accessToken && user) {
        return <Navigate to={"/app/dashboard"} replace />
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 p-4 text-white text-center">
                <h1>Titulo de rutas publicas</h1>
            </header>
            <Outlet />
        </div>
    )
}