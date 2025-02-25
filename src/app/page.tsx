import React from "react";
import Header from "./components/header";
import Body from "./components/shared/body";
import Courses from "./components/courses";
import { BackgroundBeams } from "./components/ui/backgroundBeams";
import AOSInit from "./components/aosInit";

const page = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="p-4 md:p-0 md:h-screen relative z-10">
        <AOSInit />
        <Header />
        <Body />
        <BackgroundBeams className="absolute inset-0 -z-10" />
      </div>
      <div className="md:mt-3 relative z-10">
        <Courses />
      </div>
    </div>
  );
};

export default page;
