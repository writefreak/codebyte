"use client";

import { cn } from "@/lib/utils";
import {
  BookOpenText,
  HandHelping,
  Lock,
  Menu,
  Star,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export function MobileSheet({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger asChild className="border-none">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-black text-white">
          <div className="flex items-center w-full justify-between">
            <div className="h-10 w-10">
              <img
                src="/cd_logo-removebg-preview.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
          <SheetTitle>
            <div className="flex flex-col items-center pt-9 h-full gap-10 font-light font-poppins text-white">
              <Link href={"#"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>What's New?</Link>
            </div>
            <div className="pt-10">
              <Button className="bg-blue-700 p-3 rounded-full w-full">
                Contact Us
              </Button>
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
}
