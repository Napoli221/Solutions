function Login() {
    return (
        <>
        <div className="h-screen w-screen flex items-center justify-center bg-[url('C:\Solutions\Solutions\solutions\src\assets\imagens\Back.png')] bg-cover bg-center">
     <div className="w-100">
        

        <div className="bg-white shadow-md rounded-md p-4 space-y-4">
        <h2 className="text-lg font-bold text-center mb-4">Login</h2>
            <div>
            <label for="login" className="block text-sm text-gray-800 mb-2">Login</label>
            <input type="email" name="email" id="" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"/>
            </div>
        <div>
            <label for="senha" className="block text-sm text-gray-800 mb-1">Senha</label>
            <input type="password" name="Senha" id="" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" />
        </div>
        <div className="text-right mt-3">
            <button className="text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow md-8">Login</button>
        </div>
    </div>
    </div>
    </div>
        </>
    )
}

export default Login;