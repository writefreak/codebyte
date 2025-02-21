"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function CourseOutline({ className }: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden",
        className
      )}
    >
      <InfiniteMovingCards items={courses} direction="right" speed="slow" />
    </div>
  );
}

const courses = [
  {
    id: 1,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 2,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 3,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 6,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
  {
    id: 7,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
  },
];
