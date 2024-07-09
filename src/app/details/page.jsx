import React from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

import PreviewPhone from "../component/phone_view";

const itemDetails = (props) => {
  const product = props.product;
  return (
    <div className="w-svw h-svh p-3 md:p-5">
      <div className="flex flex-col h-fit w-full bg-slate-500 rounded-lg p-2 border border-solid">
        <div className="flex flex-row gap-5">
          <Link href="/" className="w-fit ">
            <IoIosArrowRoundBack className="size-10" />
          </Link>
          <div className="breadcrumbs text-sm ">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>[project Name]</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Info zone */}
        <div className="uppercase text-center font-bold flex flex-col items-center ">
          <h1>Title</h1>
          <div className="flex flex-row flex-wrap w-full  gap-5">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/*  */}
            <p>12/06/2024</p>
            {/*  */}
            <div className="w-fit px-2 rounded-badge bg-green-400 border flex flex-row items-center gap-2">
              Done <FaCheck />
            </div>
            {/*  */}
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
          </div>
        </div>

        {/* Preview zone */}
        <div className="">
          <h1 className="font-bold uppercase p-5 text-center">Previews</h1>
          <PreviewPhone></PreviewPhone>
        </div>
      </div>
    </div>
  );
};

export default itemDetails;
