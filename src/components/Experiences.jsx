// eslint-disable-next-line no-unused-vars
import React from "react";

const experiences = [
    {
        title: "Laboratory Assistant at SEA Laboratory",
        duration: "Sep 2022 - Jul 2023",
        description:"As the laboratory assistant of Software Engineering & Application laboratory, I am responsible on managing the practicum system and curicullum along with other assistant."
    },
    {
        title: "Cloud Computing Trainee at Bangkit Program",
        duration: "Feb 2023 - Jul 2023",
        description:
            "Completed Google-led Bangkit program with training in Google Cloud, web development, and networking. Built a mobile app capstone project and enhanced both technical and soft skills. Gained a strong foundation for continuous learning, collaboration, and innovation.",
    },
    {
        title: "IT Solution (Backend) at PT Tower Bersama Group Infrastructure",
        duration: "Feb 2025 - Present",
        description:
            "Responsible for developing and maintaining backend systems using the .NET framework. Tasks include building APIs, optimizing performance, ensuring security and scalability, and troubleshooting to maintain system stability and seamless integration with business operations. ",
    }
];

const Experiences = () => {
    return (
        <section className="bg-black text-white py-15 max-sm:py-10">
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>

                {/* Timeline vertical line - now white */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-[3px] border-white"></div>

                {/* Experience items */}
                <div className="flex flex-col gap-16 relative z-10">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row ${
                                    isLeft ? "md:justify-start" : "md:justify-end"
                                }`}
                            >
                                {/* Dot in the center */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-black z-20"></div>

                                <div
                                    className={`bg-[#111] rounded-lg p-6 shadow-md w-full md:w-[45%] ${
                                        isLeft ? "md:mr-auto" : "md:ml-auto"
                                    }`}
                                >
                                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                                    <p className="text-sm italic text-gray-400">{exp.duration}</p>
                                    <p className="mt-2 text-sm text-gray-200">{exp.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
