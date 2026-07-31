import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaArrowDown, FaGraduationCap } from "react-icons/fa";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
    badge: "Future of Learning",
    title: "Welcome to Skill Path",
    subtitle: "Learn, Grow, and Achieve Your Goals with Expert Courses",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    badge: "Career Advancement",
    title: "Master New Industry Skills",
    subtitle: "Hands-on projects to build a portfolio that recruiters love",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600",
    badge: "Learn Anytime",
    title: "Flexible & Self-Paced Courses",
    subtitle: "Access world-class education from anywhere in the world",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center w-full h-full">
              {/* Overlay with Gradient for Better Text Readability */}
              <div className="z-10 absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-950/80"></div>

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-10000 transform"
              />

              {/* Content Box */}
              <div className="z-20 relative space-y-6 px-4 md:px-10 max-w-4xl text-white text-center">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full font-medium text-amber-300 text-xs md:text-sm tracking-wide">
                  <FaGraduationCap className="text-base" />
                  <span>{slide.badge}</span>
                </div>

                {/* Title */}
                <h1 className="font-extrabold text-white text-3xl md:text-6xl leading-tight md:leading-tight">
                  {slide.title.includes("Skill Path") ? (
                    <>
                      {slide.title.split("Skill Path")[0]}
                      <span className="bg-clip-text bg-gradient-to-r from-primary to-emerald-300 text-transparent">
                        Skill Path
                      </span>
                    </>
                  ) : (
                    slide.title
                  )}
                </h1>

                {/* Subtitle */}
                <p className="mx-auto max-w-2xl text-slate-200 text-base md:text-xl leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Action Buttons using React Router */}
                <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
                  <Link
                    to="/allCourses"
                    className="bg-primary hover:bg-secondary shadow-lg shadow-primary/30 px-8 py-3.5 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3.5 border border-white/30 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="hidden md:block bottom-6 left-1/2 z-30 absolute -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          <span className="font-semibold text-[10px] text-white/70 uppercase tracking-widest">
            Scroll Down
          </span>
          <FaArrowDown className="text-amber-300 text-sm" />
        </div>
      </div>
    </section>
  );
};

export default Banner;