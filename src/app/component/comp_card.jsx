import React from "react";
import Image from "next/image";
import Link from "next/link";

function CompCard(props, key) {
  const product = props.product;
  const imageCard = props.product.bg_url;

  return (
    <Link
      href={{
        pathname: "/details",
        query: { name: "test" },
      }}
      className="h-fit"
    >
      <div
        style={{ backgroundImage: `url(${imageCard})` }}
        key={props.id}
        className="uppercase font-bold text-xs sm:text-xs md:text-xs lg:text-base  bg-cover bg-center rounded-xl w-52 h-52 lg:w-72 lg:h-72 border-slate-300 border-solid border-4 p-3 cursor-pointer "
      >
        <div className="relative h-full">
          <div className="absolute flex flex-row justify-between items-center w-full">
            <div className="border-solid border-2 border-white rounded-lg cursor-pointer  bg-black/50 h-fit p-1">
              <p> {product.projectType}</p>
            </div>
            <Image
              className="border-solid border-2 border-white p-1 rounded-lg bg-black/50"
              src="https://dcoromina.s-ul.eu/language-logos/I6Kr7yXK"
              width={40}
              height={30}
              alt="Picture of the author"
            />
          </div>
          <div className=" flex flex-row bottom-0 justify-between items-center w-full absolute border-solid border-white border-2 rounded-xl p-3 bg-gray-400 bg-opacity-40 backdrop-blur-md gap-1 lg:gap-2 cursor-default">
            <p className="drop-shadow-">{product.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CompCard;
