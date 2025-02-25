import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  className?: string;
}

const Forex: React.FC = (className:Props) => {
  return (
    <div>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("fill-blue-700",className)}
      >
        <g id="layer1">
          <rect
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            width="224"
            height="224"
            x="16"
            y="16"
            ry="32"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 160,192 V 112"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 192,192 V 64"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 64,192 v -32"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 96,128 v 64"
          />
          <path
            style={{
              stroke: "#000000",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            d="M 128,144 v 48"
          />
        </g>
      </svg>
    </div>
  );
};

export default Forex;
