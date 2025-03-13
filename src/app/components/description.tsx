import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Description = ({ className }: Props) => {
  return (
    <div className={cn("", className)} data-aos="fade-up">
      <div>
        <Link href={"/#blogs"}>
          <h3 className=" font-montserrat text-2xl md:text-3xl pt-14 md:py-9 hover:underline hover:decoration-2">
            Dive into our courses and and join the conversation—your insights
            and ideas matter.
          </h3>
        </Link>

        <p className="font-montserrat text-sm font-light hidden md:block">
          Every concept we teach and every topic we explore is designed with you
          in mind.
        </p>
        <p className="font-montserrat text-sm font-light pt-5">
          Your insights enrich the learning experience, transforming this space
          into more than just a platform—it’s a community where knowledge grows
          and ideas thrive.
        </p>
        <p className="font-montserrat text-sm font-light hidden md:block">
          Be part of the conversation.
        </p>

        <h3 className="font-montserrat text-lg md:text-xl pt-10 md:pt-8">
          Leave us a message with your thoughts or questions—we'd love to hear
          from you!
        </h3>

        <a href="#">
          <div className="flex items-center gap-2 pt-5 hover:underline hover:decoration-2">
            <Mail width={14} className="" />
            <p className="font-montserrat font-light ">codebyte@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Description;
