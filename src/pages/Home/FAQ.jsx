import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of courses including Web Development, Mobile App Development, Python Programming, AI & Machine Learning, and more.",
  },
  {
    question: "Can I get a certificate after completion?",
    answer:
      "Yes, all our courses provide a verified certificate upon successful completion.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required for most of our beginner-level courses. Advanced courses may have prerequisites.",
  },
  {
    question: "What is the course duration?",
    answer:
      "Course duration varies depending on the program, ranging from 4 weeks to 12 weeks on average.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we provide a refund within 7 days of enrollment if you are not satisfied with the course.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto px-4 max-w-5xl">
        <h2 className="mb-12 font-bold text-[#39b8ad] text-4xl text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border rounded-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center px-6 py-4 focus:outline-none w-full font-medium text-gray-700 text-left"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#39b8ad]" />
                ) : (
                  <FaChevronDown className="text-[#39b8ad]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
