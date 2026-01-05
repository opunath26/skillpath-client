import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaAward } from "react-icons/fa";

const features = [
    {
        icon: <FaChalkboardTeacher />,
        title: "Expert Instructors",
        description: "Learn from industry experts who bring real-world experience to every lesson.",
    },
    {
        icon: <FaLaptopCode />,
        title: "Practical Learning",
        description: "Hands-on projects and exercises to ensure you can apply your skills immediately.",
    },
    {
        icon: <FaUsers />,
        title: "Community Support",
        description: "Connect with fellow learners and mentors to grow together.",
    },
    {
        icon: <FaAward />,
        title: "Certification",
        description: "Get recognized certificates for every course you complete to showcase your skills.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto px-4 md:px-10 max-w-7xl">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-bold text-slate-900 text-4xl">Why Choose Us</h2>
                    <div className="bg-[#0D9488] mx-auto mb-6 rounded-full w-16 h-1"></div>
                    <p className="mx-auto max-w-2xl text-slate-600 leading-relaxed">
                        At Skill Path, we provide the tools, guidance, and community support to help you succeed in your learning journey.
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white hover:shadow-xl p-8 border border-slate-100 hover:border-transparent rounded-2xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Wrapper */}
                                <div className="flex justify-center items-center bg-[#0D9488]/10 group-hover:bg-[#0D9488] mb-6 rounded-2xl w-16 h-16 text-[#0D9488] group-hover:text-white text-3xl group-hover:rotate-6 transition-all duration-500 transform">
                                    {feature.icon}
                                </div>
                                
                                <h3 className="mb-3 font-bold text-slate-800 group-hover:text-[#0D9488] text-xl transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;