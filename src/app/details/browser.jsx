import React from "react";
import CompCard from "../component/comp_card";

const CompBrowser = () => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap gap-5 justify-center bg-slate-400 rounded-md p-5 overflow-y-auto ">
      {products.map((product) => (
        <CompCard key={product.id} />
      ))}
    </div>
  );
};

export default CompBrowser;
