import React from "react";
import Image from "next/image";
import { useNavigate } from "react-router-dom";

import Link from "next/link";

import { BsSegmentedNav } from "react-icons/bs";
import { LuAppWindow } from "react-icons/lu";
import { MdOutlineAppShortcut } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
const CompNav = () => {
  return (
    <div className="h-full  sm:w-3/12 lg:w-2/12 bg-slate-500 border-slate-400 border-solid border-2 rounded-md p-2  flex-col overflow-y-auto">
      <div className="h-full flex-col gap-5 overflow-y-auto space-y-5 ">
        <div className="uppercase font-bold text-xs sm:text-sm md:text-md lg:text-lg ">
          <Image
            src="https://dcoromina.s-ul.eu/2xx7g30O"
            width={75}
            height={25}
            alt="Picture of the author"
          />
        </div>

        <div className=" flex flex-col divide-y divide-opacity-20 divide-white">
          <input
            type="text"
            className="w-full h-9 border-2 border-solid  bg-white bg-opacity-40 rounded-lg flex flex-row items-center p-1 hover:drop-shadow-xl hover:border-gray-500 cursor-text placeholder:text-white"
            placeholder="Search.."
          />
        </div>
        <div className="flex-col flex space-y-1">
          <div className="font-bold uppercase">Tags</div>
          <div className="hover:bg-white hover:bg-opacity-30 cursor-pointer  rounded-md active:border h-8 flex flex-row items-center px-1 gap-2 ">
            <BsSegmentedNav />
            <p>Navbar</p>
          </div>
          <div className="hover:bg-white hover:bg-opacity-30 cursor-pointer  rounded-md active:border h-8 flex flex-row items-center px-1 gap-2 ">
            <MdOutlineAppShortcut />
            <p>App</p>
          </div>
          <div className="hover:bg-white hover:bg-opacity-30 cursor-pointer  rounded-md active:border h-8 flex flex-row items-center px-1 gap-2 ">
            <LuAppWindow />
            <p>Web</p>
          </div>
          <div className="hover:bg-white hover:bg-opacity-30 cursor-pointer  rounded-md active:border h-8 flex flex-row items-center px-1 gap-2 ">
            <LuCreditCard />
            <p>Card</p>
          </div>
        </div>
        <div className="flex flex-col  space-y-1">
          <div className="font-bold uppercase">Languages</div>
          <div className="flex flex-row justify-start items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-30  rounded-md active:border gap-2">
            <Image
              src="https://dcoromina.s-ul.eu/language-logos/8rfCSm72"
              width={25}
              height={25}
              alt="Picture of the author"
            />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-row justify-start items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-30  rounded-md active:border gap-2">
            <Image
              src="https://dcoromina.s-ul.eu/language-logos/I6Kr7yXK"
              width={25}
              height={25}
              alt="Picture of the author"
            />
            <p>React</p>
          </div>
          <div className="flex flex-row justify-start items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-30  rounded-md active:border gap-2">
            <Image
              src="https://dcoromina.s-ul.eu/language-logos/aWJsz0n9"
              width={25}
              height={25}
              alt="Picture of the author"
            />
            <p>Flutter</p>
          </div>
        </div>
        <Link href={"/addProject"}>
          <button className="flex  flex-row  justify-start cursor-pointer  hover:bg-white/20 p-2 items-center rounded-md active:border gap-2">
            <IoIosAddCircleOutline />
            <p>Add Project</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompNav;
