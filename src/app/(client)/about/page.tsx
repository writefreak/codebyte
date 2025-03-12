import AboutText from "@/app/components/about/aboutText";
import ImgDesc from "@/app/components/about/imageDesc";
import Footer from "@/app/components/footer";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-black text-white grid sm:grid-cols-2 pt-6 pb-20">
        <AboutText />
        <ImgDesc className="hidden sm:block" />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
