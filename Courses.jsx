import {useState} from "react"
export function Courses() {
    const[active,setActive] = useState("foundations");
    const sections = {
        foundations : {
            title: "Foundations of AI and ML",
            desc1: "Master the mathematics that powers Machine Learning algorithms",
            desc2: "Understand how Linear Algebra works behind data representation",
            desc3: "Learn Calculus concepts used in model training and optimization",
            desc4: "Use Probability & Statistics for predictions and decision-making",
            desc5: "Understand how Python works for programming and problem solving"
        },
        machinelearning : {
            title: "Machine Learning",
            desc1: "Understand how Machine Learning works to learn patterns from data",
            desc2: "Understand how ML algorithms make predictions and decisions",
            desc3: "Understand how training and testing data are used in ML models",
            desc4: "Understand how features and labels represent real-world problems",
            desc5: "Understand how Machine Learning models improve with experience"
        },
        deeplearning : {
            title: "Deep Learning",
            desc1: "Understand how deep neural networks learn from data",
            desc2: "Understand how backpropagation updates model weights",
            desc3: "Understand how CNNs handle images and vision tasks",
            desc4: "Understand how RNNs process sequential data",
            desc5: "Understand how deep learning solves complex AI problems"
        },
        advancedai :{
            title: "Advanced AI",
            desc1: "Understand advanced AI concepts and systems",
            desc2: "Learn intelligent decision-making models",
            desc3: "Work with modern AI architectures",
            desc4: "Apply AI in real-world applications",
            desc5: "Build scalable AI solutions"
        }
    };   

    return (
        <div className="min-h-screen bg-black">
            <div>
                <h1 className="text-5xl font-bold text-white">AI and ML Courses</h1>
            </div>
            <div className="flex justify-center text-white gap-12 text-lg mt-10 font-medium">
                {Object.keys(sections).map((key)=>(
                    <button key={key} onClick={()=>setActive(key)} 
                    className={`px-6 py-3 rounded-xl transition ${active==key?"border border-blue-500 text-blue-700":"text-white hover:text-blue-400"}`}>
                    {sections[key].title}</button>
                ))}
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-3xl mx-auto text-left">
                <div>
                    <h2 className="text-3xl font-semibold text-white">{sections[active].title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">{sections[active].desc1}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{sections[active].desc2}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{sections[active].desc3}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{sections[active].desc4}</p>
                    <p className="text-gray-600 text-lg leading-relaxed">{sections[active].desc5}</p>
                    <button className="text-blue-500 hover:text-blue-700 transition font-medium">Get started </button>
                </div>
            </div>
        </div>
    )
}
