import React from "react";
import { CourseOutline } from "./CourseOutline";

const MobileCourses = () => {
  return (
    <div>
      <div>
        <CourseOutline className="md:hidden" />
      </div>
    </div>
  );
};

export default MobileCourses;
