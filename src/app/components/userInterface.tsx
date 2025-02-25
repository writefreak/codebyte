import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
}

const UserInterface = (className: Props) => {
  return (
    <div>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("fill-blue-700", className)}
      >
        <title />

        <g data-name="Layer 34" id="Layer_34">
          <path d="M29.92,21.62A1,1,0,0,0,29,21H23a2,2,0,0,0-2,2v6a1,1,0,0,0,.62.92A.84.84,0,0,0,22,30a1,1,0,0,0,.71-.29l7-7A1,1,0,0,0,29.92,21.62Z" />

          <path d="M22,30H7a5,5,0,0,1-5-5V10.92a1,1,0,0,1,1-1H29a1,1,0,0,1,1,1V22a1,1,0,0,1-.29.71l-7,7A1,1,0,0,1,22,30ZM4,11.92V25a3,3,0,0,0,3,3H21.59L28,21.59V11.92Z" />

          <path d="M25,2H7A5,5,0,0,0,2,7v3.92a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A5,5,0,0,0,25,2ZM9,9a2,2,0,1,1,2-2A2,2,0,0,1,9,9ZM23,9a2,2,0,1,1,2-2A2,2,0,0,1,23,9Z" />

          <path d="M12.81,25.19c-7.75,0-8.81-6-8.81-8.06L3.21,25A3.86,3.86,0,0,0,7,29H21V25S14.87,25.19,12.81,25.19Z" />
        </g>
      </svg>
    </div>
  );
};

export default UserInterface;
