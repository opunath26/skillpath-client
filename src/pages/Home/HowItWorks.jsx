import React from "react";
import { FaUserPlus, FaSearch, FaGraduationCap, FaCertificate } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Join our community by creating a free account in just a few clicks.",
    icon: <FaUserPlus />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Find Your Course",
    description: "Browse our extensive library of expert-led courses to find what you need.",
    icon: <FaSearch />,
    color: "bg-[#0D9488]/10 text-[#0D9488]",
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Learn at your own pace with high-quality videos and hands-on projects.",
    icon: <FaGraduationCap />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Get Certified",
    description: "Complete the course and earn a certificate to showcase your skills.",
    icon: <FaCertificate />,
    color: "bg-amber-100 text-amber-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-4 md:px-10 container">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h4 className="mb-2 font-bold text-[#0D9488] text-sm uppercase tracking-widest">
            Process
          </h4>
          <h2 className="font-black text-slate-800 text-3xl md:text-4xl tracking-tight">
            How It <span className="text-[#0D9488]">Works</span>
          </h2>
          <div className="bg-[#0D9488] mx-auto mt-4 rounded-full w-20 h-1.5"></div>
        </div>

        {/* Steps Grid */}
        <div className="relative gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector Line (Only for desktop) */}
          <div className="hidden lg:block top-1/4 left-0 -z-0 absolute border-slate-200 border-t-2 border-dashed w-full h-0.5"></div>

          {steps.map((step) => (
            <div key={step.id} className="group z-10 relative">
              <div className="bg-white shadow-sm hover:shadow-xl p-8 border border-slate-100 rounded-3xl text-center transition-all hover:-translate-y-2 duration-300">
                {/* Step Number */}
                <div className="-top-4 left-1/2 absolute flex justify-center items-center bg-slate-800 rounded-full w-8 h-8 font-bold text-white text-sm -translate-x-1/2">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-bold text-slate-800 text-xl uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;