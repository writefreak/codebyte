import React from "react";
import CoursePill from "./coursePill";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Unlock } from "../unlock";
import Link from "next/link";

const Body = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="pt-12 flex items-center flex-col md:pt-1 space-y-7">
        <CoursePill />
        {/* <h2 className="text-center text-3xl font-bold font-raleway md:text-8xl">
          Unlock Your <br />
          Tech Skills Here
        </h2> */}
        <Unlock />
      </div>
      <div
        className="flex w-full justify-center flex-col md:flex-row pt-14 gap-4 md:gap-3"
        data-aos="fade-up"
      >
        <Button className="bg-blue-700 rounded-full hover:bg-gradient-to-r from-blue-700 ... hover:bg-transparent">
          Get Started
        </Button>
        <Link href={"/fullCourses"} className="">
          <Button className="border w-full border-blue-700 rounded-full hover:bg-gradient-to-r from-blue-700 ... hover:border-0 ">
            Learn More
            <div>
              <ChevronRight />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
