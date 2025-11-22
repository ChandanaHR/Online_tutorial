export default function Home() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col">
            <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 w-full max-w-6xl flex items-center justify-between py-2 rounded-lg">
                <div className="flex items-center space-x-2 p-6">
                    <div className="bg-white text-black font-bold px-5 py-5 rounded-full">CXN</div>
                    <span className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-lg font-bold py-5">CodXploreNIX</span>
                </div>
                <div className="flex items-center space-x-6 p-6">
                    <span className="bg-blue-800 text-white font-bold py-4 px-5">Home</span>
                    <span className="bg-yellow-400">Login/Signup</span>
                </div>
            </nav>
        </div>
    )
}
