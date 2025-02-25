"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { cn } from "@/lib/utils";
import Cyber from "./cyber";
import VideoEdit from "./videoEdit";
import SocialMedia from "./socialMedia";
import FrontEnd from "./frontEnd";
import UserInterface from "./userInterface";
import Forex from "./forex";
import Py from "./py";

interface Props {
  className?: string;
}

export function CourseOutline({ className }: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden",
        className
      )}
    >
      <InfiniteMovingCards items={courses} direction="right" speed="slow" />
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "CYBERSECURITY",
    desc: ` Learn the fundamentals of cybersecurity, including threat detection, risk management, 
    and defense strategies to protect digital systems and data.`,
    img: <Cyber />,
  },
  {
    id: 2,
    title: "VIDEO EDITING",
    desc: ` Master video editing techniques, from cutting and transitions 
    to color grading and special effects, using industry-standard software.`,
    img: <VideoEdit />,
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: ` Learn to create, schedule, and optimize content for various platforms to grow engagement 
    and manage online communities effectively.`,
    img: <SocialMedia />,
  },
  {
    id: 4,
    title: "FRONTEND WEB DEVELOPMENT",
    desc: ` Build responsive and interactive websites using HTML, CSS, JavaScript, 
    and modern frameworks like React.`,
    img: <FrontEnd />,
  },
  {
    id: 5,
    title: "UI/UX DESIGN",
    desc: ` Explore the principles of user interface and experience design to create intuitive, 
    visually appealing, and user-friendly digital products.`,
    img: <UserInterface />,
  },

  {
    id: 6,
    title: "FOREX TRADING",
    desc: `Gain essential skills in forex market analysis, risk management, and trading strategies 
    to navigate currency trading successfully.`,
    img: <Forex />,
  },
  {
    id: 7,
    title: "PYTHON PROGRAMMING",
    desc: ` Learn Python from the basics to advanced concepts, including data structures, 
    automation, and web development.`,
    img: <Py />,
  },
];
