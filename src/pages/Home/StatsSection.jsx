import React from "react";
import { FaUsers, FaBookReader, FaAward, FaChalkboardTeacher } from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "Active Students",
    value: "15,000+",
    icon: <FaUsers />,
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    label: "Total Courses",
    value: "1,200+",
    icon: <FaBookReader />,
    bgColor: "bg-[#0D9488]",
  },
  {
    id: 3,
    label: "Expert Instructors",
    value: "350+",
    icon: <FaChalkboardTeacher />,
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    label: "Satisfaction Rate",
    value: "99.9%",
    icon: <FaAward />,
    bgColor: "bg-amber-500",
  },
];

const StatsSection = () => {
  return (
    <section className="relative bg-slate-900 mt-20 py-20 overflow-hidden">
      {/* Background patterns */}
      <div className="top-0 left-0 absolute opacity-10 w-full h-full pointer-events-none">
        <div className="top-10 left-10 absolute bg-[#0D9488] blur-[120px] rounded-full w-64 h-64"></div>
        <div className="right-10 bottom-10 absolute bg-blue-600 blur-[120px] rounded-full w-64 h-64"></div>
      </div>

      <div className="z-10 relative mx-auto px-4 md:px-10 container">
        <div className="gap-6 md:gap-10 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="group bg-white/5 hover:bg-white/10 p-6 md:p-8 border border-white/10 hover:border-[#0D9488]/50 rounded-3xl transition-all duration-500"
            >
              <div className={`${stat.bgColor} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {stat.icon}
              </div>
              
              <h3 className="mb-2 font-black text-white text-3xl md:text-4xl tracking-tight">
                {stat.value}
              </h3>
              
              <p className="font-medium text-slate-400 text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
              
              {/* Progress Bar Decoration */}
              <div className="bg-[#0D9488]/30 mt-4 rounded-full w-12 h-1 overflow-hidden">
                <div className="bg-[#0D9488] w-full h-full transition-transform translate-x-[-100%] group-hover:translate-x-0 duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;