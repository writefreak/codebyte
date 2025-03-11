import React from "react";
import Learning from "./learning";

const WhyChooseUs = () => {
  return (
    <div className="md:pb-9 pt-12 pb-12 md:border-none border-t-[0.1px] border-b-[.1px] border-neutral-600">
      <div className="md:px-16 px-6 md:py-9 py-4 space-y-12">
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
