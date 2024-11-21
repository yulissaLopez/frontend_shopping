import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function useAuth() {
    const authContext = useContext(AuthContext)

    if (authContext === undefined || authContext === null) {
        throw new Error("usedAuth must be within an AuthProvider'")
    }

    return authContext
    
}