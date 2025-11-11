import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: "Pritom Shil",
        role: "Web Developer",
        image: "https://ibb.co.com/7JQrxLJw",
        comment: "This platform transformed my career. The courses are practical and engaging!",
        rating: 5,
    },
    {
        name: "Ankon Das",
        role: "UI/UX Designer",
        image: "https://ibb.co.com/7JQrxLJw",
        comment: "I love the interactive projects. The instructors are very supportive.",
        rating: 4,
    },
    {
        name: "SD Shan",
        role: "Data Analyst",
        image: "https://ibb.co.com/7JQrxLJw",
        comment: "Highly recommend! Great community and real-world applications.",
        rating: 5,
    },
    {
        name: "SRK Anurag",
        role: "Frontend Developer",
        image: "https://ibb.co.com/7JQrxLJw",
        comment: "Amazing platform! I learned so much in just a few months.",
        rating: 5,
    },
    {
        name: "MAC Gunjon",
        role: "Backend Developer",
        image: "https://ibb.co.com/7JQrxLJw",
        comment: "Excellent resources and very helpful support team.",
        rating: 4,
    },
];

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="relative bg-gradient-to-r from-[#39b8ad]/20 via-[#2ea99f]/20 to-[#39b8ad]/20 mt-20 py-20 overflow-hidden">
            {/* Soft parallax shapes */}
            <div className="top-0 left-0 absolute bg-[#39b8ad]/10 blur-3xl rounded-full w-72 h-72 animate-blob mix-blend-multiply filter"></div>
            <div className="right-0 bottom-0 absolute bg-[#2ea99f]/10 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>

            <div className="z-10 relative mx-auto px-4 md:px-10 max-w-7xl text-center">
                <h2 className="mb-6 font-bold text-[#39b8ad] text-4xl">What Our Students Say</h2>
                <p className="mb-12 text-gray-700">
                    Hear from our learners who have transformed their careers with Skill Path.
                </p>

                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white shadow-xl hover:shadow-2xl p-6 rounded-2xl transition duration-300">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="mb-4 border-[#39b8ad] border-2 rounded-full w-20 h-20 object-cover"
                                    />
                                    <h3 className="font-semibold text-xl">{review.name}</h3>
                                    <p className="mb-2 text-gray-500 text-sm">{review.role}</p>
                                    <div className="flex justify-center items-center mb-4">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-center">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;
