import { div } from "motion/react-client";
import React from "react";
import { CourseOutline } from "./CourseOutline";
import MobileCourses from "./mobileCourses";
import Cyber from "./cyber";
import VideoEdit from "./videoEdit";
import SocialMedia from "./socialMedia";
import FrontEnd from "./frontEnd";
import UserInterface from "./userInterface";
import Forex from "./forex";
import Py from "./py";

const DesktopCoursedesc = () => {
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-6 hidden">
        {courses.map((c) => (
          <div
            key={c.id}
            className="flex flex-col gap-4 md:h-full h-36 p-2 md:p-0 "
          >
            <div className="bg-blue-700 h-7 w-7 p-1 rounded-md">
              <img src={c.img} alt="" className="w-full h-full" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-raleway">{c.title}</h3>
              <p className="font-montserrat font-light text-xs text-neutral-400  md:w-full">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MobileCourses />
    </div>
  );
};

export default DesktopCoursedesc;

const courses = [
  {
    id: 1,
    title: "CYBERSECURITY",
    desc: ` Learn the fundamentals of cybersecurity, including threat detection, risk management, 
    and defense strategies to protect digital systems and data.`,
    img: "/cybersecurity-two-tone-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "VIDEO EDITING",
    desc: ` Master video editing techniques, from cutting and transitions 
    to color grading and special effects, using industry-standard software.`,
    img: "/interface-ui-window-application-app-button-cta-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: ` Learn to create, schedule, and optimize content for various platforms to grow engagement 
    and manage online communities effectively.`,
    img: "/camera-square-svgrepo-com.svg",
  },
  {
    id: 4,
    title: "FRONTEND WEB DEVELOPMENT",
    desc: ` Build responsive and interactive websites using HTML, CSS, JavaScript, 
    and modern frameworks like React.`,
    img: "/web-svgrepo-com.svg",
  },
  {
    id: 5,
    title: "UI/UX DESIGN",
    desc: ` Explore the principles of user interface and experience design to create intuitive, 
    visually appealing, and user-friendly digital products.`,
    img: "/website-dashboard-svgrepo-com.svg",
  },

  {
    id: 6,
    title: "FOREX TRADING",
    desc: `Gain essential skills in forex market analysis, risk management, and trading strategies 
    to navigate currency trading successfully.`,
    img: "/graph-analytics-business-svgrepo-com.svg",
  },
  {
    id: 7,
    title: "PYTHON PROGRAMMING",
    desc: ` Learn Python from the basics to advanced concepts, including data structures, 
    automation, and web development.`,
    img: "/language-python-svgrepo-com.svg",
  },
];
