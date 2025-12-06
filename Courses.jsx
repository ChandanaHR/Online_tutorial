import {useState} from "react"
export function Courses() {
    const[active,setActive] = useState("");
    const sections = {
        foundations : {
            title: "Foundations of AI and ML",
            desc: "Master the essential math behind ML: Linear Algebra, Calculus, Probability, and Statistics."
        },
        machinelearning : {
            title: "Machine Learning",
            desc : "Master the essential math behind ML, Supervised ml, unsupervised ml"
        }
};   

    return (
        <div className="min-h-screen bg-black">
            <div>
                <h1 className="text-5xl font-bold text-white">AI and ML Courses</h1>
            </div>
            <div className="flex justify-center gap-16 text-white text-lg font-medium mt-4">
                <button onMouseEnter={()=>setActive("foundations")}
                        className={`pb-2 transition ${
                            active === "foundations" ? "border border-transparent px-6 py-4 rounded-xl hover:border-blue-800 hover:text-blue-800" : "text-white"
                        }`}>
                Foundations of AI and ML</button>
                <button onMouseEnter={()=>setActive("machinelearning")}
                        className={`pb-2 transition ${
                            active === "machinelearning" ? "border border-transparent px-6 py-4 rounded-xl hover:border-blue-800 hover:text-blue-800" : "text-white"
                        }`}>Machine Learning</button>
                <button onMouseEnter={()=>setActive("deeplearning")}
                        className={`pb-2 transition ${
                            active === "deeplearning" ? "border border-transparent px-6 py-4 rounded-xl hover:border-blue-800 hover:text-blue-800" : "text-white"
                        }`}>Deep Learning</button>
                <button onMouseEnter={()=>setActive("advancedai")}
                        className={`pb-2 transition ${
                            active === "advancedai" ? "border border-transparent px-6 py-4 rounded-xl hover:border-blue-800 hover:text-blue-800" : "text-white"
                        }`}>Advanced AI</button>
            </div>
        </div>
    )
}
