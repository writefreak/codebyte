import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { div } from "motion/react-client";
import DesktopCoursedesc from "../desktopCoursedesc";
import { Explore } from "../explore";

interface Props {
  className?: string;
}

const CourseDesktop = ({ className }: Props) => {
  return (
    <div
      className="flex flex-col md:flex-row md:px-14 pb-10 gap-10 md:gap-14 md:pt-12"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-7">
        <div className="md:h-[150px] md:w-[300px] rounded-md ">
          <img
            src="/programming-background-with-person-working-with-codes-computer (1).jpg"
            alt=""
            className="h-full w-full object-cover rounded-md hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-5 md:pt-0 pt-6">
          <h2 className="font-montserrat text-2xl md:text-2xl font-bold text-center md:text-left">
            Discover Our Courses
          </h2>
          <p className="font-montserrat  text-xs leading-4 text-neutral-400 md:text-left text-center">
            Explore our courses and gain in-demand skills in{" "}
            <br className="md:hidden" /> cybersecurity, video editing, social
            media management, <br className="md:hidden" /> frontend web
            development, forex trading, Python <br className="md:hidden" />{" "}
            programming, and UI/UX design.
          </p>
          {/* <div className="p-4 rounded-md md:hidden">
            <img
              src="/programming-background-with-person-working-with-codes-computer (1).jpg"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div> */}
        </div>
      </div>
      <DesktopCoursedesc />
    </div>
  );
};

export default CourseDesktop;
