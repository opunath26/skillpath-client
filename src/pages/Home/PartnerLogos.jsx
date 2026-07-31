import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
];

const PartnerLogos = () => {
  return (
    <section className="relative bg-slate-50/60 py-12 md:py-16 border-slate-100 border-y overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Title Section */}
        <div className="mb-8 md:mb-10 text-center">
          <p className="font-semibold text-slate-400 text-xs md:text-sm uppercase tracking-[0.2em]">
            Trusted by World-Class Companies & Universities
          </p>
        </div>

        {/* Swiper Slider Wrapper with Side Fading Overlay */}
        <div className="relative">
          {/* Left & Right Fade Overlay for Smooth Edges */}
          <div className="hidden sm:block top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-slate-50 to-transparent w-16 pointer-events-none" />
          <div className="hidden sm:block top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-slate-50 to-transparent w-16 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="flex items-center !ease-linear partner-swiper"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center py-2">
                <div className="group flex justify-center items-center p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 w-auto max-w-[110px] sm:max-w-[130px] md:max-w-[150px] h-7 sm:h-9 md:h-10 object-contain group-hover:scale-105 transition-all duration-300 filter"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default PartnerLogos;