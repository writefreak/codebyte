import CourseText from "@/app/components/fullCourses/courseText";
import WelcomeText from "@/app/components/fullCourses/welcomeText";
import Header from "@/app/components/header";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Header />
      <WelcomeText />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr]">
        <CourseText />
      </div>
    </div>
  );
};

export default page;
