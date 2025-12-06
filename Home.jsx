export default function Home() {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col">
            <nav className="mt-2.5 ml-3 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 w-full max-w-6xl flex items-center justify-between py-2 rounded-lg">
                <div className="flex items-center space-x-2 p-6">
                    <div className="bg-white text-black font-bold px-5 py-5 rounded-full">CXN</div>
                    <span className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-lg font-bold py-5">CodXploreNIX</span>
                </div>
                <div className="flex items-center space-x-6 p-6">
                    <span className="bg-blue-800 text-white font-bold py-4 px-5">Home</span>
                    <span className="bg-yellow-400">Login/Signup</span>
                </div>
            </nav>
            
                <div className="text-center mt-24">
                    <h1 className="font-inter text-4xl text-white">Take your career to the next level with <span className="text-blue-400">Artificial Intelligence</span></h1>
                    <h1 className="font-inter text-4xl text-white mt-8">Empowering You to Reach the <span className="text-yellow-400 border-4 border-yellow-500 rounded-2xl">Top 1%</span></h1>
                </div>
                <div className="text-white mt-6">
                <p>Master AI and Machine Learning with expert-curated resources and structured guidance — build industry-ready skills and rise into the top tier of ML engineers.</p>
                </div>
        </div>
    )
}
