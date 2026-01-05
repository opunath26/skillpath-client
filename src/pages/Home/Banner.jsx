import React from "react";
// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaArrowDown } from "react-icons/fa";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        title: "Welcome to Skill Path",
        subtitle: "Learn, Grow, and Achieve Your Goals with Expert Courses",
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        title: "Master New Skills",
        subtitle: "Industry-standard projects to boost your career portfolio",
    },
    {
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        title: "Flexible Learning",
        subtitle: "Access world-class education from anywhere in the world",
    }
];

const Banner = () => {
    return (
        <section className="relative w-full h-[65vh] md:h-[70vh] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative flex justify-center items-center w-full h-full">
                            {/* Overlay */}
                            <div className="z-10 absolute inset-0 bg-black/50"></div>
                            
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 shadow-inner w-full h-full object-cover"
                            />

                            {/* Content */}
                            <div className="z-20 relative px-4 md:px-10 max-w-4xl text-white text-center">
                                <h1 className="mb-4 font-bold text-4xl md:text-6xl animate-fade-down">
                                    {slide.title.split("Skill Path")[0]} 
                                    <span className="text-[#0D9488]">Skill Path</span>
                                </h1>
                                <p className="mb-8 text-gray-200 text-lg md:text-xl animate-fade-up">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    <button className="bg-[#0D9488] hover:bg-[#0b7a6f] shadow-lg px-8 py-3 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 transform">
                                        Get Started
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3 border border-white/50 rounded-xl font-bold text-white transition-all duration-300">
                                        Explore Courses
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Down Indicator */}
            <div className="hidden md:block bottom-8 left-1/2 z-30 absolute -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-white/60 text-xs uppercase tracking-widest">Scroll Down</span>
                    <FaArrowDown className="text-white/80 text-xl" />
                </div>
            </div>
        </section>
    );
};

export default Banner;