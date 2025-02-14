import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MobileSheet } from "./shared/mobileSheet";

const Header = () => {
  return (
    <div className="flex md:w-full p-1 px-3 font-poppins font-light text-[16px] ">
      <div className="flex items-center md:p-6 justify-between w-full">
        <div className="flex items-center gap-10">
          <div className="h-10 w-10">
            <img
              src="/cd_logo-removebg-preview.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="hidden md:flex gap-10">
            <div className="group">
              <Link href={"#"}>Home</Link>
              <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
            </div>
            <div className="group">
              <Link href={"#"}>About</Link>
              <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
            </div>
            <div className="group">
              <Link href={"#"}>Features</Link>
              <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
            </div>
            <div className="group">
              <Link href={"#"}>Pricing</Link>
              <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
            </div>
          </div>
        </div>
        <div className="md:flex items-center gap-10 hidden">
          <div className="group">
            <Link href={"#"}>What's New?</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
          </div>
          <div className="group">
            <Link href={"#"}>Help</Link>
            <div className="group-hover:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-blue-700"></div>
          </div>

          <Button className="bg-blue-700 p-3 rounded-full hover:bg-gradient-to-r from-blue-700 ... hover:bg-transparent">
            Contact Us
          </Button>
        </div>
        <MobileSheet className="md:hidden bg-black text-white" />
      </div>
    </div>
  );
};

export default Header;
