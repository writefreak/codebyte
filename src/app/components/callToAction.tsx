import { div } from "motion/react-client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import DesktopCTA from "./desktopCTA";

const CallToAction = () => {
  return (
    <div
      className="md:px-14 py-14  relative md:flex w-full items-center justify-center h-full"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="relative rounded-md">
        {/* mobile view */}
        <div className=" px-4 md:hidden">
          <img
            src="/rear-view-programmer-working-all.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute top-0 right-0 left-0 bg-black/50 bottom-0 ">
            <div className="flex md:block h-full justify-center items-center">
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-montserrat text-xl ">Get Started Today!</h3>
                <Link href={"#"}>
                  <Button className="bg-white hover:bg-white backdrop-blur-md text-black font-montserrat px-6 ">
                    REGISTER
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <DesktopCTA className="hidden md:grid" />
      </div>
    </div>
  );
};

export default CallToAction;
