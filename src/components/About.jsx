/* eslint-disable no-unused-vars */
import React,{useState} from "react"
import irfan from "../assets/irfan.png"

const DescAbout = () =>{
    return(
        <div>
            <p className="text-white my-8 pr-20 text-justify">A fresh graduate in Computer Engineering with a strong interest in web development. Experienced in frontend and backend development, with projects involving cloud technology deployment. Actively improving skills through independent projects and training.</p>
            <div className="flex gap-32">
                <div>
                    <p className="text-white opacity-50 text-xs">Graduated from</p>
                    <h1 className="text-white text-lg font-semibold">Telkom University</h1>
                </div>
                <div>
                    <p className="text-white opacity-50 text-xs">GPA</p>
                    <h1 className="text-white text-lg font-semibold">3.60</h1>
                </div>
            </div>
        </div>
    )
}

const About = () =>{
    const[showDesc,setShowDesc]=useState(false)

    const handleToggle = () =>{
        setShowDesc(!showDesc)
    }

    return(
        <div className="flex">
            <div className="kiri w-full h-auto">
                <button 
                className="px-7 py-1 text-white border rounded-[20px]"
                onClick={handleToggle}
                >About</button>
                {showDesc && <DescAbout/>}
            </div>
            <div className="kanan w-full h-auto">
                <p className="text-white text-2xl ">I’m Irfan, a Web Developer crafting innovative solutions and bringing ideas to life through code and cloud technology.</p>
                <div className="flex my-16">
                    <img src={irfan} alt="foto_irfan" className="w-1/4"/>
                    <div className="px-5 flex flex-col justify-between">
                        <p className="font-semibold text-white">Future-Ready Development</p>
                        <p className="text-lg font-normal leading-6 text-gray-300">Developing solutions that scale with tomorrows technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About