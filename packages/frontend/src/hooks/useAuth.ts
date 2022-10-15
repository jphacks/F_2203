import { useContext } from "react"
import { AuthContext } from "../context/authContext"
export const useAuth = () => {
    return useContext(AuthContext)
}

export const useAuthUser = () => {
    return useAuth().user
}

export const useAuthInitialized = () => {
    return useAuth().initialized
}