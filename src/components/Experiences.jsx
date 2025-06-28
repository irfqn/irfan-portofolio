import React from "react";

const experiences = [
    {
        title: "Lorem ipsum dolor sit amet",
        duration: "2023 - 2025",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        duration: "2023 - 2025",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        duration: "2023 - 2025",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
        title: "Lorem ipsum dolor sit amet",
        duration: "2023 - 2025",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

const Experiences = () => {
    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-5xl mx-auto px-4 relative">
                <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>

                {/* Timeline vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-[3px] border-gray-600"></div>

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
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-400 border-4 border-black z-20"></div>

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
