import React, { useState } from "react";
import { faqs } from "../constants/faqs.ts";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Help & FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <button
              className="w-full text-left p-4 font-medium text-lg bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className={`transition-height duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
              style={{
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="p-4 bg-white">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
