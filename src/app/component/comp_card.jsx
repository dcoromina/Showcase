import React from "react";
import Image from "next/image";

const CompCard = async () => {
  return (
    <div className="uppercase font-bold text-xs sm:text-xs md:text-xs lg:text-base bg-[url('https://dcoromina.s-ul.eu/dCqzpQ3q')] bg-cover bg-center rounded-xl w-52 h-52 lg:w-72 lg:h-72 border-slate-300 border-solid border-4 p-3 cursor-pointer ">
      <div className="relative h-full">
        <div className="right-0 absolute border-solid border-2 border-white p-1 rounded-lg bg-black bg-opacity-50">
          <Image
            src="https://dcoromina.s-ul.eu/language-logos/I6Kr7yXK"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <div className=" flex flex-row bottom-0 justify-between items-center w-full absolute border-solid border-white border-2 rounded-xl p-3 bg-gray-400 bg-opacity-40 backdrop-blur-md gap-1 lg:gap-2 cursor-default">
          <p className="drop-shadow-">Title long with text</p>
          <div className="flex flex-row">
            <div className="border-solid border-2 border-white rounded cursor-pointer p-1">
              Navbar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCard;
