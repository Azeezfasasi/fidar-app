import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Fidar?",
    answer: `Fidar is a powerful SaaS product that revolutionizes file management, communication, and document creation. It provides a seamless platform for sharing and receiving files, tracking their progress, engaging in real-time conversations with team members, converting files into various formats, and composing documents collaboratively.`,
  },
  {
    question: "How does Fidar simplify file sharing and receiving?",
    answer: "Fidar simplifies file sharing by offering an intuitive platform for users to easily upload, share, and receive files with colleagues and team members.",
  },
  {
    question: "Can I track the progress of shared files in Fidar?",
    answer: "Yes, Fidar allows you to track the progress of shared files by providing real-time updates and notifications.",
  },
  {
    question: "How does Fidar facilitate communication among team members?",
    answer: "Fidar offers integrated chat and real-time messaging features that allow team members to communicate effectively while working on shared documents.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-4/5 mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">FAQ</h1>
      <p className="text-gray-500 text-base md:text-lg text-center w-full md:w-4/5">
        Fidar, a cutting-edge SaaS product designed to streamline your file sharing, tracking, communication, and document composition needs.
      </p>
      <div className="shadow-lg p-6 w-full md:w-5/6 rounded-lg">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
          >
            <button
              className="text-lg md:text-xl font-medium text-[#35B2F6] w-full text-left flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="ml-2">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            <p
              className={`text-gray-600 text-sm md:text-base mt-2 overflow-hidden transition-[max-height] duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
        <Link
          to="#"
          className="text-[#35B2F6] text-center font-medium text-lg underline mt-6 block"
        >
          See More
        </Link>
      </div>
    </div>
  );
}

export default Faq;
