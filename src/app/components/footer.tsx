import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#111539] bg-opacity-90 text-white p-9 flex flex-col gap-2 md:gap-11 text-base font-montserrat font-light">
      <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-12">
        <div className="flex items-center">
          <span className="text-[18px] font-montserrat font-light">
            Learn with us today! <br />
            Let's build your career together.
          </span>
        </div>

        <div className="flex md:flex-row justify-between items-center md:gap-12 md:pb-0 pb-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="">Contact</span>
            </div>

            <div>
              <Link href={"#"} className="flex flex-col gap-2 md:gap- text-xs">
                <span>codeybyte@gmail.com</span>
                <span>+2347045287003</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="">Legal</span>

            <div className="flex flex-col gap-1 text-xs">
              <Link href={"#"} className="gap-2 md:gap-1">
                <p>Terms Of Service</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[0.2px] border-neutral-600 pt-5 md:pt-4 p-1 text-[12px] flex md:flex-row flex-col md:items-center justify-between">
        <div className="space-y-4">
          <p>© 2024 Codebyte. All Rights Reserved.</p>
          <p>Built by Writefreak</p>
        </div>
        <div className="flex gap-3 py-4">
          <FaFacebook />
          <RiInstagramFill />
          <FaXTwitter />
          <IoLogoWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
