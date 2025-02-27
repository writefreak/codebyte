import React from "react";
import Learn from "./ui/learn";
import Create from "./create";
import Innovate from "./innovate";

const Learning = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {approach.map((a) => (
        <div
          data-aos="fade-in"
          key={a.id}
          className="text-center font-montserrat flex flex-col gap-2 items-center text-neutral-300"
        >
          <div className="h-16 w-16 p-2 rounded-full bg-blue-600 flex items-center justify-center">
            {a.icon}
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl">{a.title}</h3>
            <p className="w-72 md:w-full text-[14.5px]">{a.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Learning;

const approach = [
  {
    id: 1,
    icon: <Learn />,
    title: "Learn",
    desc: "Gain industry-relevant tech skills through structured, hands-on training.",
  },
  {
    id: 2,
    icon: <Create />,
    title: "Create",
    desc: "Apply your knowledge to build real-world projects and solutions.",
  },
  {
    id: 3,
    icon: <Innovate />,
    title: "Innovate",
    desc: "Develop problem-solving abilities that drive innovation in the tech industry.",
  },
];
