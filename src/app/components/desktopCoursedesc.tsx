import { div } from "motion/react-client";
import React from "react";
import { CourseOutline } from "./CourseOutline";
import MobileCourses from "./mobileCourses";

const DesktopCoursedesc = () => {
  return (
    <div>
      <div className="md:grid grid-cols-3 gap-4 hidden">
        {courses.map((c) => (
          <div
            key={c.id}
            className="flex flex-col gap-4 md:h-full h-36 p-2 md:p-0 "
          >
            <div className="bg-blue-700 h-7 w-7 p-1 rounded-md">
              <img src={c.img} alt="" className="h-full w-full object-cover " />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-raleway">{c.title}</h3>
              <p className="font-raleway font-light text-xs text-neutral-400  md:w-full">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <MobileCourses />
    </div>
  );
};

export default DesktopCoursedesc;

const courses = [
  {
    id: 1,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 4,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 5,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 6,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
  {
    id: 7,
    title: "Lorem ipsum",
    desc: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ut veritatis quia tempore illum numquam sit facilis
            architecto animi laborum?`,
    img: "/web-development-svgrepo-com.svg",
  },
];
