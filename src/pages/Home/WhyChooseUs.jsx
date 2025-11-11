// WhyChooseUs.jsx
import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaAward } from "react-icons/fa";

const features = [
    {
        icon: <FaChalkboardTeacher className="mb-4 text-[#39b8ad] text-4xl" />,
        title: "Expert Instructors",
        description: "Learn from industry experts who bring real-world experience to every lesson.",
    },
    {
        icon: <FaLaptopCode className="mb-4 text-[#39b8ad] text-4xl" />,
        title: "Practical Learning",
        description: "Hands-on projects and exercises to ensure you can apply your skills immediately.",
    },
    {
        icon: <FaUsers className="mb-4 text-[#39b8ad] text-4xl" />,
        title: "Community Support",
        description: "Connect with fellow learners and mentors to grow together.",
    },
    {
        icon: <FaAward className="mb-4 text-[#39b8ad] text-4xl" />,
        title: "Certification",
        description: "Get recognized certificates for every course you complete to showcase your skills.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto px-4 md:px-10 max-w-7xl text-center">
                <h2 className="mb-6 font-bold text-[#39b8ad] text-4xl">Why Choose Us</h2>
                <p className="mb-12 text-gray-700">
                    At Skill Path, we provide the tools, guidance, and community support to help you succeed in your learning journey.
                </p>

                <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg hover:shadow-2xl p-6 rounded-2xl transition duration-300"
                        >
                            <div className="flex flex-col items-center">
                                {feature.icon}
                                <h3 className="mb-2 font-semibold text-xl">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
