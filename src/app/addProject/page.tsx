import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";

const itemDetails = () => {
  return (
    <div className="w-svw h-svh p-2">
      <div className=" w-full h-full bg-slate-500 rounded-lg p-2 border border-solid flex flex-col ">
        <div className="flex flex-row w-full justify-center  items-center gap-5 ">
          <h1>Add Project</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Title</h1>
          <input
            type="text"
            placeholder="Title"
            className="input w-full max-w-xs"
          />
          <h1>Thumbnail</h1>
          <input
            placeholder="Title"
            type="file"
            className="file-input w-full max-w-xs"
          />
          {/*  */}
          <h1>Languages</h1>
          <div className="flex flex-row  space-y-1">
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
          {/*  */}
          <select title="title" className="select w-full max-w-xs">
            <option disabled selected>
              Type of project
            </option>
            <option>App</option>
            <option>Web</option>
            <option>Navbar</option>
            <option>Card</option>
          </select>
          {/*  */}
          <select title="title" className="select w-full max-w-xs">
            <option disabled selected>
              Progress
            </option>
            <option>Dropped</option>
            <option>Done</option>
            <option>Ongoing</option>
            <option>On hold</option>
          </select>
          {/*  */}
          <h1>Code files</h1>
          <input
            placeholder="Title"
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <div className="flex flex-row justify-evenly  h-full items-end pb-7">
          <Link href="/" className="w-fit ">
            <button className="btn bg-red-500">Cancel</button>
          </Link>
          <button className="btn bg-green-900">Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default itemDetails;
