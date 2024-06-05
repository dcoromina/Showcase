import React from "react";
import NavBar from "./navbar";
import Browser from "./browser";

const layout = () => {
  return (
    <div className="w-screen h-screen flex-row flex">
      <NavBar />
      <Browser />
    </div>
  );
};

export default layout;
