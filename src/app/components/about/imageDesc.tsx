import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Description from "../description";

interface Props {
  className?: string;
}
const ImgDesc = ({ className }: Props) => {
  return (
    <div className={cn("md:p-6 md:px-9", className)}>
      <img
        src="/rear-view-programmer-working-all.jpg"
        alt=""
        className="rounded-xl"
      />
      <Description className="hidden md:block" />
    </div>
  );
};

export default ImgDesc;
