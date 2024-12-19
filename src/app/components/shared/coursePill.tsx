import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const CoursePill = () => {
  return (
    <div className="font-inter">
      <Button className="border border-blue-700 md:rounded-full rounded-xl md:px-4">
        <p className="font-semibold">Our Courses</p>
        <div className="flex border-l border-white px-2 items-center text-gray-500 gap-2 hover:translate-x-1 duration-500 ">
          <p className=" ">Read More</p>
          <MoveRight />
        </div>
      </Button>
    </div>
  );
};

export default CoursePill;
