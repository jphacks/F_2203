import React from "react"

const Login = () => {
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
