import { FAQ } from "@/content/faq";
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto">
      <ul>
        {FAQ.map((faq, index) => (
          <li key={index} className="mb-2">
            <div
              onClick={() => toggleFaq(index)}
              className="bg-white rounded p-5 flex items-center justify-between cursor-pointer"
            >
              <h4 className="font-semibold text-lg">{faq.question}</h4>
              <div className="font-semibold text-xl">
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="p-5 bg-gray-100 rounded mt-2">
                {/* <p>{faq.answer}</p> */}
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
