import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaAward } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    description: "Learn from industry experts who bring real-world experience and insights to every lesson.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Practical Learning",
    description: "Hands-on projects and interactive exercises to ensure you can apply skills immediately.",
  },
  {
    icon: <FaUsers />,
    title: "Community Support",
    description: "Connect with thousands of fellow learners, mentors, and peers to grow together.",
  },
  {
    icon: <FaAward />,
    title: "Global Certification",
    description: "Earn industry-recognized certificates upon completion to highlight on your resume.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background Soft Glow Decoration */}
      <div className="top-1/2 left-1/2 absolute bg-teal-500/5 blur-[120px] rounded-full w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="space-y-3 mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <span className="inline-block bg-teal-50 px-3.5 py-1.5 border border-teal-100 rounded-full font-semibold text-[#0D9488] text-xs md:text-sm uppercase tracking-wider">
            Why Choose Skill Path
          </span>
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Elevate Your Learning Experience
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We provide the resources, expert guidance, and hands-on environment you need to build real-world confidence and succeed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between items-center bg-white hover:bg-slate-50/80 shadow-sm hover:shadow-xl p-6 md:p-8 border border-slate-100 hover:border-teal-200/60 rounded-2xl text-center transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Icon Box */}
                <div className="flex justify-center items-center bg-teal-50 group-hover:bg-[#0D9488] shadow-sm mb-6 rounded-2xl w-16 h-16 text-[#0D9488] group-hover:text-white text-2xl md:text-3xl group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-bold text-slate-900 group-hover:text-[#0D9488] text-lg md:text-xl transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="bg-slate-100 group-hover:bg-[#0D9488] mt-6 rounded-full w-8 group-hover:w-16 h-1 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;