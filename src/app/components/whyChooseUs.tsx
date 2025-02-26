import React from "react";
import Learning from "./learning";

const WhyChooseUs = () => {
  return (
    <div className="md:pt-20 pt-12">
      <div className="bg-gradient-to-r from-blue-700 to-black ... md:px-16 px-6 md:py-16 py-8 space-y-12">
        <div className="gap-4 flex flex-col items-center">
          <h3 className="text-base text-neutral-300  text-center  font-montserrat">
            Why Choose Us?
          </h3>
          <h2 className="text-xl md:text-3xl font-bold font-montserrat">
            Our Triple Phased Training Approach
          </h2>
        </div>

        <div className="flex items-center w-full justify-center">
          <Learning />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

// Learn, create, innovate
// Learn – Gain industry-relevant tech skills through structured, hands-on training.

// Create – Apply your knowledge to build real-world projects and solutions.

// Innovate – Develop problem-solving abilities that drive innovation in the tech industry.
