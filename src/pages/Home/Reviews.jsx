import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: "Pritom Shil",
        role: "Web Developer",
        image: "https://i.ibb.co.com/zV2JywvM/p.jpg",
        comment: "This platform transformed my career. The courses are practical and engaging!",
        rating: 5,
    },
    {
        name: "Ankon Das",
        role: "UI/UX Designer",
        image: "https://i.ibb.co.com/pjz4hgn2/a.jpg",
        comment: "I love the interactive projects. The instructors are very supportive.",
        rating: 4,
    },
    {
        name: "SD Shan",
        role: "Data Analyst",
        image: "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg",
        comment: "Highly recommend! Great community and real-world applications.",
        rating: 5,
    },
    {
        name: "SRK Anurag",
        role: "Frontend Developer",
        image: "https://i.ibb.co.com/YBbt21Xp/nunu.jpg",
        comment: "Amazing platform! I learned so much in just a few months.",
        rating: 5,
    },
    {
        name: "MAC Gunjon",
        role: "Backend Developer",
        image: "https://i.ibb.co.com/YFFG3LLP/mac.jpg",
        comment: "Excellent resources and very helpful support team.",
        rating: 4,
    },
];

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="mx-auto px-4 md:px-10 max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-bold text-slate-900 text-4xl tracking-tight">
                        Success Stories from Our Students
                    </h2>
                    <div className="bg-primary mx-auto rounded-full w-20 h-1"></div>
                </div>

                <Slider {...settings} className="review-slider">
                    {reviews.map((review, index) => (
                        <div key={index} className="px-4 py-6">
                            <div className="group relative bg-white shadow-sm hover:shadow-md p-8 border border-slate-100 rounded-2xl h-full transition-all duration-300">
                                {/* Quote Icon */}
                                <FaQuoteLeft className="top-6 right-8 absolute text-slate-100 group-hover:text-primary/10 text-5xl transition-colors" />
                                
                                <div className="z-10 relative flex flex-col h-full">
                                    {/* Ratings */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-sm ${i < review.rating ? "text-amber-400" : "text-slate-200"}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="flex-grow mb-8 text-slate-600 italic leading-relaxed">
                                        "{review.comment}"
                                    </p>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4 pt-6 border-slate-50 border-t">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="shadow-sm rounded-full ring-2 ring-slate-50 w-14 h-14 object-cover"
                                        />
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg leading-tight">
                                                {review.name}
                                            </h3>
                                            <p className="font-medium text-primary text-sm">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            
            {/* Custom Dot Styling */}
            <style jsx global>{`
                .review-slider .slick-dots li button:before {
                    color: #cbd5e1;
                    font-size: 10px;
                }
                .review-slider .slick-dots li.slick-active button:before {
                    color: var(--color-primary, #2563eb);
                }
            `}</style>
        </section>
    );
};

export default Reviews;