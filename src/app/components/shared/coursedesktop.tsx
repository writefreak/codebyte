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

interface Props {
  className?: string;
}

const CourseDesktop = ({ className }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:px-14 pb-10 gap-10 md:gap-14">
      <div className="flex flex-col gap-7">
        <div className="md:h-[150px] md:w-[300px] rounded-md ">
          <img
            src="/programming-background-with-person-working-with-codes-computer (1).jpg"
            alt=""
            className="h-full w-full object-cover rounded-md hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-montserrat text-[22px] md:text-xl font-[550] leading-5 text-center md:text-left">
            Explore Our Full Online courses
          </h3>
          <img
            src="/programming-background-with-person-working-with-codes-computer (1).jpg"
            alt=""
            className="h-full w-full object-cover rounded-md md:hidden flex p-4 md:p-0"
          />
          <p className="font-montserrat font-light text-xs leading-4 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur
            <br className="hidden md:flex" /> adipisicing elit. A alias aut
            inventore numquam <br className="hidden md:flex" /> ratione possimus
            eius consectetur quas veniam illum.
          </p>
        </div>
      </div>
      <DesktopCoursedesc />
    </div>
  );
};

export default CourseDesktop;
