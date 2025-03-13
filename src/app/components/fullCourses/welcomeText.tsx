import React from "react";
import ImgDesc from "../about/imageDesc";

const WelcomeText = () => {
  return (
    <div>
      <div className="md:h-[600px] w-full p-4 md:p-12 rounded-xl">
        <img
          src="/light-bulb-lamps.jpg"
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default WelcomeText;
