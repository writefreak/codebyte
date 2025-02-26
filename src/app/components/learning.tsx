import React from "react";
import Learn from "./ui/learn";

const Learning = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="text-center font-montserrat flex flex-col gap-2 items-center text-neutral-300">
        <div className="h-16 w-16 p-2 rounded-full bg-blue-600 flex items-center justify-center">
          <Learn />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          soluta!
        </p>
      </div>
      <div className="text-center font-montserrat flex flex-col gap-2 items-center text-neutral-300">
        <div className="h-16 w-16 p-2 rounded-full bg-blue-600 flex items-center justify-center">
          <Learn />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          soluta!
        </p>
      </div>
      <div className="text-center font-montserrat flex flex-col gap-2 items-center text-neutral-300">
        <div className="h-16 w-16 p-2 rounded-full bg-blue-600 flex items-center justify-center">
          <Learn />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          soluta!
        </p>
      </div>
    </div>
  );
};

export default Learning;
