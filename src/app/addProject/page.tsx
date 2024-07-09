import React from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const itemDetails = () => {
  return (
    <div className="w-svw h-svh p-5">
      <div className=" w-full h-full bg-slate-500 rounded-lg p-2 border border-solid ">
        <div className="flex flex-row w-full items-center gap-5 ">
          <Link href="/" className="w-fit ">
            <IoIosArrowRoundBack className="size-10" />
          </Link>
          <h1>Add Project</h1>
        </div>
      </div>
    </div>
  );
};

export default itemDetails;
