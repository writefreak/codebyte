import { ChevronDown } from "lucide-react";
import React from "react";
import { CourseCards } from "./shared/courseCards";
import CourseDesktop from "./shared/coursedesktop";

const Courses = () => {
  return (
    <div>
      <div className="px-4">
        <CourseDesktop className="md:grid" />
      </div>
    </div>
  );
};

export default Courses;
