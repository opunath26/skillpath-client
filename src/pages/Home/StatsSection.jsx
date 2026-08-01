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
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: 2,
    label: "Total Courses",
    number: 1200,
    suffix: "+",
    icon: <FaBookReader />,
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
  {
    id: 3,
    label: "Expert Instructors",
    number: 350,
    suffix: "+",
    icon: <FaChalkboardTeacher />,
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    id: 4,
    label: "Satisfaction Rate",
    number: 99.9,
    decimals: 1,
    suffix: "%",
    icon: <FaAward />,
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 py-16 md:py-20 overflow-hidden text-white">
      {/* Background Glow Overlay */}
      <div className="top-1/2 left-1/2 absolute bg-teal-500/10 blur-[120px] rounded-full w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Glassmorphism Wrapper */}
        <div className="bg-white/5 shadow-2xl backdrop-blur-xl p-8 sm:p-12 border border-white/10 rounded-3xl">
          <div className="gap-8 sm:gap-6 grid grid-cols-2 lg:grid-cols-4 sm:divide-x divide-y sm:divide-y-0 divide-white/10">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group flex flex-col items-center text-center ${
                  index !== 0 ? "pt-6 sm:pt-0" : ""
                }`}
              >
                {/* Glowing Icon Container */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border ${stat.iconBg} flex items-center justify-center text-xl sm:text-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {stat.icon}
                </div>

                {/* Counter */}
                <h3 className="mb-1 font-black text-amber-400 group-hover:text-amber-300 text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors">
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
                <p className="font-semibold text-slate-300 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;