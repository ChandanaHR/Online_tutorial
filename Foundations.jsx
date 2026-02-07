import foundations from "./images/Foundations.png"
import {useState} from "react"
export function Foundations() {
    const[open1,setopen1] = useState(false)
    return (
        <div>
           <div className="bg-gradient-to-r from-slate-950 via-blue-800 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-8 py-20">
                <p className="text-sm text-white mb-6">CodXploreNIX<span className="mx-2"></span>Courses</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Foundations of Artificial Intelligence and Machine Learning</h1>
                <p className="text-lg text-gray-400">This Foundations of AI and ML course is designed for absolute beginners, offering step-by-step explanations, practical intuition, and a well-structured learning guide.</p>
            </div>
           </div>
           <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <div className="bg-blue-100 rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-8">What you will learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                </ul>
                                <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-700 text-lg">?</span>
                                            <p>Understand the complete AI & ML workflow from data collection to model deployment</p>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative">
                                    <img src={foundations} alt="Foundations" className="w-full h-48 object-cover"/>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl">
                                            ♦
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl font-bold">Rs 500</span>
                                        <span className="text-2xl font-bold line-through text-gray-500">Rs 4000</span>
                                    </div>
                                    <button className="w-full bg-black text-white py-3 rounded-lg font-semibold mb-2">Click here to login and buy</button>
                                    <p className="text-gray-600 text-center">Login to purchase this course</p>
                                </div>
                            </div>
                            {/* Main end 1 */}
                        </div>
                    </div>
                    {/* Main end */}
                </div>
            </div> 
            {/* Third part Syllabus */}
            <div className="max-w-7xl mx-auto bg-black text-white px-6 py-20">
                <h1>Chandana HR</h1>
                <div className="bg-blue-900 text-color rounded-xl shadow-2xl p-8">
                    <h1>Asha KS</h1>
                    <div className="flex bg-white text-black p-5 justify-center items-center mb-6">
                        <h1 className="text-3xl font-bold">Course Content</h1>
                        <span className="text-sm text-gray-500">Syllabus</span>
                    </div>
                    <div className="space-y-4">
                        <div className="border-b pb-4 flex font-medium justify-between" onClick={()=>setopen1(!open1)}>
                            Introduction and Overview of Artificial Intelligence
                            <span>{open1? "Arrow up":"Arrow down"}</span>
                            {(open1 && <div className="pl-4">
                                <ul className="list-disc space-y-2">
                                    <li>Definition of Artificial Intelligence</li>
                                    <li>History of Artificial Intelligence</li>
                                    <li>Applications of AI</li>
                                    <li>AI vs ML vs Deep Learning</li>
                                    <li>Types of AI</li>
                                </ul>
                            </div>)}
                        </div>
                        <div className="border-b pb-4 flex font-medium justify-between" onClick={()=>setopen1(!open1)}>
                                Mathematics and Fundamentals
                            <span>{open1? "Arrow up":"Arrow down"}</span>
                            {(open1 && <div className="pl-4">
                                <ul className="list-disc space-y-2">
                                    <li>Linear Algebra</li>
                                    <li>Probability theory</li>
                                    <li>Statistics</li>
                                    <li>Calculus (Optimization Basics)</li>
                                    <li>Numerical Methods</li>
                                    <li>Boolean Algebra and Logic</li>
                                </ul>
                            </div>)}
                        </div>
                    </div>
                    {/* Course Content heading and syllabus */}
                </div>
            </div>
        </div>
    )
}
