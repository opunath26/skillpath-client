import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer Web Development, Mobile App Development, Python, AI & Machine Learning, and other career-focused courses.",
  },
  {
    question: "Can I get a certificate after completion?",
    answer:
      "Yes. After successfully completing any course, you will receive a verified digital certificate.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required for beginner courses. Advanced courses may have prerequisites.",
  },
  {
    question: "What is the course duration?",
    answer:
      "Course duration varies between 4 to 12 weeks depending on the course structure.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. We offer a 7-day refund policy if you are not satisfied with the course.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="top-1/2 left-0 absolute bg-teal-500/5 blur-[120px] rounded-full w-72 h-72 pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="space-y-3 mx-auto mb-12 md:mb-16 max-w-2xl text-center">
          <span className="inline-block bg-teal-50 px-3.5 py-1.5 border border-teal-100 rounded-full font-semibold text-[#0D9488] text-xs md:text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything you need to know about our platform, courses, and learning process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-teal-200 shadow-lg shadow-teal-500/5"
                    : "border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Left Accent Bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 transition-all duration-300 ${
                    isOpen ? "bg-[#0D9488]" : "bg-transparent"
                  }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center gap-4 p-5 sm:p-6 w-full text-left transition-colors duration-200"
                >
                  <div className="flex flex-1 items-center gap-3.5 sm:gap-4">
                    {/* Number Badge */}
                    <span
                      className={`flex flex-shrink-0 justify-center items-center rounded-xl w-8 h-8 sm:w-9 sm:h-9 font-bold text-xs sm:text-sm transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#0D9488] text-white shadow-sm"
                          : "bg-teal-50 text-[#0D9488]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* Question */}
                    <span className="font-bold text-slate-900 group-hover:text-[#0D9488] text-base sm:text-lg transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Arrow Icon */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-teal-50 text-[#0D9488] rotate-180"
                        : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <FaChevronDown className="text-xs sm:text-sm" />
                  </div>
                </button>

                {/* Smooth Expanding Answer Box */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pt-0 pb-6 sm:pl-[4.25rem] text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;