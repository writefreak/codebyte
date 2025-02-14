"use client";

import { cn } from "@/lib/utils";
import { Carousel } from "../ui/carousel";

interface Props {
  className?: string;
}

export function CourseCards({ className }: Props) {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/programming-background-with-person-working-with-codes-computer (1).jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/rear-view-programmer-working-all.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/abstract-cybersecurity-concept-design.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/SEO.jpeg",
    },
  ];
  return (
    <div className={cn("relative overflow-hidden pb-14", className)}>
      <Carousel slides={slideData} />
    </div>
  );
}
