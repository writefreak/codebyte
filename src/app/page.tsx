import React from "react";
import Header from "./components/header";
import Body from "./components/shared/body";

const page = () => {
  return (
    <div className="p-4 md:p-0">
      <Header />
      <Body />
    </div>
  );
};

export default page;
