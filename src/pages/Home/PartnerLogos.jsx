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
    <section className="bg-slate-50/50 py-16 border-slate-100 border-y">
      <div className="mx-auto px-4 md:px-10 container">
        {/* Title */}
        <div className="mb-10 text-center">
          <p className="mb-2 font-bold text-slate-400 text-xs uppercase tracking-[0.2em]">
            Trusted by World-Class Companies
          </p>
        </div>

        {/* Logo Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="opacity-50 hover:opacity-100 grayscale hover:grayscale-0 p-4 transition-all duration-500 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="mx-auto w-auto h-8 md:h-10 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerLogos;