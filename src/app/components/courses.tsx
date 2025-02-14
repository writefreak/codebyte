import { ChevronDown } from "lucide-react";
import React from "react";
import { CourseCards } from "./shared/courseCards";
import CourseDesktop from "./shared/coursedesktop";

const Courses = () => {
  return (
    <div>
      <div className="py-14 md:flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-montserrat text-2xl md:text-4xl text-center">
            Discover Our Courses Here
          </h3>
        </div>
        <div className="p-4 md:px-12 mx-auto pt-12 md:pt-0">
          <CourseCards className="md:hidden" />
        </div>
      </div>
      <CourseDesktop className="hidden md:grid " />
    </div>
  );
};

export default Courses;
