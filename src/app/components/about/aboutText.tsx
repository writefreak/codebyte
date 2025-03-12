import { cn } from "@/lib/utils";
import React from "react";
import { ChevronLeft, Star } from "lucide-react";
import ImgDesc from "./imageDesc";
import Description from "../description";
import Link from "next/link";

interface Props {
  className?: string;
}
const AboutText = ({ className }: Props) => {
  return (
    <div className={cn("p-6 sm:p-10", className)}>
      <Link
        href={"/"}
        className="flex items-center gap-1 pb-7 font-montserrat text-sm"
      >
        <ChevronLeft className="w-4 h-4 text-neutral-300" />
        <span className="text-neutral-300">Back</span>
      </Link>
      <div className="space-y-11">
        <div className="space-y-3">
          <h3 className="text-2xl pb-2  sm:text-3xl font-montserrat">
            About Us
          </h3>
          <p className="font-montserrat text-sm font-light">
            CodeByte is a platform for insightful, engaging, and inspiring tech
            education designed to spark curiosity and fuel innovation. We cover
            a broad spectrum of topics, from coding and software development to
            emerging trends in technology and digital transformation.
          </p>
        </div>
        <ImgDesc className="sm:hidden p-0" />
        <div className="space-y-3">
          <h3 className="text-2xl pb-2 sm:text-3xl font-montserrat">
            Our Mission
          </h3>
          <p className="font-montserrat text-sm font-light">
            We aim to empower learners with knowledge, sparking curiosity and
            providing valuable insights into technology and innovation.
          </p>
          <p className="font-inter text-sm font-light">
            By delving into diverse technologies and emerging trends, we strive
            to fuel your passion for learning and inspire innovation.
          </p>
        </div>

        <div>
          <img
            src="/programming-background-with-person-working-with-codes-computer (1).jpg"
            alt=""
            className="rounded-xl "
          />
          <Description className="sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default AboutText;
