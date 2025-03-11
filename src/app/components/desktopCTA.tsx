import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
interface Props {
  className?: string;
}

const DesktopCTA = (className: Props) => {
  return (
    <div className={cn("grid grid-cols-2 relative gap-7 pb-16", className)}>
      <div className="hidden md:flex relative" data-aos="fade-right">
        <img
          src="/rear-view-programmer-working-all.jpg"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 z-50 bg-black/50 ">
          <div className="flex flex-col w-full h-full items-center justify-center gap-3">
            <h3 className="font-montserrat text-xl ">Get Started Today!</h3>
            <Link href={"#"}>
              <Button className="bg-white hover:bg-white backdrop-blur-md text-black font-montserrat px-6 ">
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="font-montserrat hidden md:flex flex-col justify-center gap-3"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-bold">
          Let’s Make Something Great Happen!
        </h3>
        <p className="font-montserrat text-neutral-300 font-light">
          Take the first step toward growth and new opportunities. Whether
          you're exploring fresh ideas or refining your skills, now is the
          perfect time to begin.
        </p>
      </div>
    </div>
  );
};

export default DesktopCTA;
