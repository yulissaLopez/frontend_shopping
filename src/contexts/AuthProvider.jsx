import { useState } from "react";
import { createContext } from "react";
import { URL_BACKEND } from "../lib/constants";
import { useMemo } from "react";
import { useCallback } from "react";
import { saveTokensToStorage } from "../lib/utils/handleTokens";
import { useEffect } from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState({
    accessToken: "",
    refreshToken: ""
  })

  const getProfile = useCallback(async () => {

    try {
      const response = await fetch(`${URL_BACKEND}usuarios/my_profile/`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${tokens.accessToken}`
        },
      })
      if (response.ok){
        const json = await response.json()
        setUser(json)
      }
    } catch (error) {
      console.log(error)
    }

  }, [tokens.accessToken])

  const login = useCallback(async ({ username, password }) => {
    try {
      const response = await fetch(`${URL_BACKEND}usuarios/login/`, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
      })   
      const json = await response.json()

      const { accessToken, refreshToken } = json
      saveTokensToStorage(accessToken, refreshToken)
      setTokens({ accessToken, refreshToken })

    } catch (error) {
        console.log(error)
    }
  }, [])

  useEffect (() => {
    getProfile()
  }, [tokens.accessToken, getProfile])

  const contextValue = useMemo(() => ({
    login,
    tokens, 
    getProfile,
    user
  }), [login, tokens, getProfile, user])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
