import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  className?: string;
}

const CourseDesktop = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <Card className="bg-black border-none text-white shadow-md">
        <CardContent className="grid grid-cols-3 gap-4">
          <div className="">
            <img
              src="/rear-view-programmer-working-all.jpg"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <img
              src="/rear-view-programmer-working-all.jpg"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="">
            <img
              src="/rear-view-programmer-working-all.jpg"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDesktop;
