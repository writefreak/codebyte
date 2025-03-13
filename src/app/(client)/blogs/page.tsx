import Footer from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-screen w-full justify-center ">
        <h2 className="text-2xl md:text-5xl text-center font-raleway">
          Oops! <br /> No Blogs Available Here
        </h2>
        <Link href={"/"} className="flex items-center pt-10">
          <Button className="bg-blue-700 rounded-full px-11">
            <span className="text-base font-raleway">Back</span>
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default page;
