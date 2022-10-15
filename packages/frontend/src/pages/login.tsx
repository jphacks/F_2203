import React, { FC, useEffect, useReducer } from "react"
import authReducer from "@/reducers/authReducer"
import { useAuthUser } from "@/hooks/useAuth"
import { useRouter } from "next/router"
import { authUseCase } from "@/useCases"

const Login: FC = () => {
    const router = useRouter()
    const [, dispatch] = useReducer(authReducer.reducer, authReducer.initialState)
    const user = useAuthUser()

    useEffect(() => {
        if (user != null && !user.isAnonymous) {
            router.push("/")
        }
    }, [user])

    const logIn = async () => {
        try {
            await authUseCase.signIn(dispatch)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <main className="bg-[#001B36] mx-auto my-auto min-h-screen justify-center flex items-center">
            <div>
                <div className="justify-center flex mb-40">
                    <h1 className="text-7xl text-white">
                        Welcom!
                    </h1>
                </div>

                <div className="justify-center flex">
                    <button
                        className="border rounded-lg py-2 px-4"
                        onClick={logIn}
                    >
                        <p className="font-medium text-white" >
                            Googleアカウントでログイン
                        </p>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Login
