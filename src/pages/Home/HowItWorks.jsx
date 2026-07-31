import React from "react";
import { FaUserPlus, FaSearch, FaGraduationCap, FaCertificate } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Join our community by creating a free account in just a few clicks.",
    icon: <FaUserPlus />,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: 2,
    title: "Find Your Course",
    description: "Browse our extensive library of expert-led courses to find what you need.",
    icon: <FaSearch />,
    color: "bg-teal-50 text-[#0D9488] border-teal-100",
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Learn at your own pace with high-quality videos and hands-on projects.",
    icon: <FaGraduationCap />,
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete the course and earn a certificate to showcase your skills.",
    icon: <FaCertificate />,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-slate-50/50 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="space-y-3 mx-auto mb-14 md:mb-20 max-w-2xl text-center">
          <span className="inline-block bg-teal-50 px-3.5 py-1.5 border border-teal-100 rounded-full font-semibold text-[#0D9488] text-xs md:text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            How Skill Path <span className="text-[#0D9488]">Works</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Follow these four simple steps to start building your skills and advancing your professional career.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative gap-8 md:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block top-1/2 right-12 left-12 z-0 absolute border-slate-200 border-t-2 border-dashed h-0.5 -translate-y-10" />

          {steps.map((step) => (
            <div key={step.id} className="group z-10 relative flex flex-col h-full">
              <div className="flex flex-col flex-1 justify-between items-center bg-white hover:bg-slate-50/50 shadow-sm hover:shadow-xl p-6 sm:p-8 border border-slate-100 hover:border-teal-200/60 rounded-2xl text-center transition-all duration-300">
                
                <div className="flex flex-col items-center w-full">
                  {/* Step Badge */}
                  <div className="inline-flex justify-center items-center bg-slate-900 shadow-md mb-6 rounded-full ring-4 ring-white w-8 h-8 font-bold text-white text-xs">
                    0{step.id}
                  </div>

                  {/* Icon Container */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${step.color} border rounded-2xl flex items-center justify-center mb-6 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {step.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 font-bold text-slate-900 group-hover:text-[#0D9488] text-lg md:text-xl transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Indicator */}
                <div className="bg-slate-100 group-hover:bg-[#0D9488] mt-6 rounded-full w-12 group-hover:w-20 h-1 transition-all duration-300" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;