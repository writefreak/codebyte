"use client";
import React from "react";
import { PinContainer } from "./ui/pinPerspective";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function Explore({ className }: Props) {
  return (
    <div
      className={cn(
        "h-[40rem] w-full flex items-center justify-center px-4",
        className
      )}
    >
      <PinContainer title="CodeByte" href="#" className="p-4">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem] ">
          <h3 className="max-w-xs  font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
