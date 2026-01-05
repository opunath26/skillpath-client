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

  return (
    <section className="relative bg-gradient-to-br from-[#f8fffe] to-[#eef9f8] py-20">
      <div className="mx-auto px-4 max-w-6xl">
        <h2 className="mb-4 font-bold text-gray-800 text-4xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="mb-14 text-gray-600 text-center">
          Everything you need to know before getting started
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#39b8ad] shadow-lg"
                    : "border-gray-200 hover:shadow-md"
                }`}
              >
                {/* Left Accent Bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                    isOpen ? "bg-[#39b8ad]" : "bg-transparent"
                  }`}
                />

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex items-center gap-4 px-6 py-5 w-full text-left"
                >
                  {/* Number Badge */}
                  <span className="flex flex-shrink-0 justify-center items-center bg-[#39b8ad]/10 rounded-full w-9 h-9 font-semibold text-[#39b8ad]">
                    {index + 1}
                  </span>

                  {/* Question */}
                  <span className="flex-1 font-medium text-gray-800 text-lg">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <FaChevronDown
                    className={`text-[#39b8ad] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.25rem] overflow-hidden text-gray-600 leading-relaxed">
                    {faq.answer}
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
