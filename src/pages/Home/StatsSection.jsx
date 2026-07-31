import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaBookReader, FaAward, FaChalkboardTeacher } from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "Active Students",
    number: 15000,
    suffix: "+",
    icon: <FaUsers />,
    bgColor: "bg-blue-50 text-blue-600 border-blue-100",
    hoverBg: "group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    id: 2,
    label: "Total Courses",
    number: 1200,
    suffix: "+",
    icon: <FaBookReader />,
    bgColor: "bg-teal-50 text-[#0D9488] border-teal-100",
    hoverBg: "group-hover:bg-[#0D9488] group-hover:text-white",
  },
  {
    id: 3,
    label: "Expert Instructors",
    number: 350,
    suffix: "+",
    icon: <FaChalkboardTeacher />,
    bgColor: "bg-purple-50 text-purple-600 border-purple-100",
    hoverBg: "group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    id: 4,
    label: "Satisfaction Rate",
    number: 99.9,
    decimals: 1,
    suffix: "%",
    icon: <FaAward />,
    bgColor: "bg-amber-50 text-amber-600 border-amber-100",
    hoverBg: "group-hover:bg-amber-500 group-hover:text-white",
  },
];

const StatsSection = () => {
  // Trigger animation when the section enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative bg-slate-50/60 py-16 md:py-20 border-slate-100 border-y overflow-hidden">
      {/* Background Subtle Gradient Blurs */}
      <div className="top-0 left-1/4 absolute bg-teal-500/5 blur-[100px] rounded-full w-72 h-72 pointer-events-none" />
      <div className="right-1/4 bottom-0 absolute bg-blue-500/5 blur-[100px] rounded-full w-72 h-72 pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative flex flex-col justify-between bg-white hover:bg-slate-50/80 shadow-sm hover:shadow-xl p-5 sm:p-6 md:p-8 border border-slate-100 hover:border-teal-200/80 rounded-2xl transition-all hover:-translate-y-1.5 duration-300 transform"
            >
              <div>
                {/* Icon Container with Smooth Hover Transition */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl border ${stat.bgColor} ${stat.hoverBg} flex items-center justify-center text-xl sm:text-2xl md:text-3xl mb-5 sm:mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Animated Counter Value */}
                <h3 className="mb-1.5 font-extrabold text-slate-900 group-hover:text-[#0D9488] text-2xl sm:text-3xl md:text-4xl tracking-tight transition-colors duration-200">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>

                {/* Label */}
                <p className="font-semibold text-slate-500 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              {/* Animated Bottom Bar Effect */}
              <div className="bg-slate-100 mt-5 sm:mt-6 rounded-full w-full h-1 overflow-hidden">
                <div className="bg-[#0D9488] w-full h-full transition-transform -translate-x-full group-hover:translate-x-0 duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;