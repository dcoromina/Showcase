"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { supabase } from "../utils/supabase/clients";

const addProject = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [languages, setLanguages] = useState("");
  const [projectType, setType] = useState("");
  const [progress, setProgress] = useState("");
  const [formError, setFormError] = useState("");

  const errorToast = async (e: any) => {
    return <div className="toast toast-top toast-start"></div>;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !projectType) {
      return toast.error("Fill all the necessary info");
    }
    const { data, error } = await supabase
      .from("Showcase")
      .insert([{ title, projectType }]);
    toast.success(title + " Has been added succesfully");

    if (error) {
      toast.error("There's been an error with your upload", {
        description: "Error: " + error,
      });
    }
  };

  return (
    <div className="w-svw h-svh p-2">
      <div className=" w-full h-full bg-slate-500 rounded-lg p-2 border border-solid flex flex-col items-center ">
        <div className="flex flex-row w-full justify-center  items-center gap-5 ">
          <h1 className="font-bold uppercase text-xl p-5">Add Project</h1>
        </div>
        <Toaster position="bottom-right" richColors />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full ">
          <label htmlFor="Title">Title</label>
          <input
            id="title"
            value={title}
            type="text"
            placeholder="Title"
            className="input w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1>Thumbnail</h1>
          <input
            id="thumb"
            value={thumbnail}
            placeholder="File"
            type="file"
            className="file-input w-full  max-w-xs"
            onChange={(e) => setThumbnail(e.target.value)}
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
          <select
            id="type"
            value={projectType}
            title="type"
            className="select w-full max-w-xs"
            onChange={(e) => setType(e.target.value)}
          >
            <option>App</option>
            <option>Web</option>
            <option>Navbar</option>
            <option>Card</option>
          </select>
          {/*  */}
          <select
            id="progress"
            value={progress}
            title="progress"
            className="select w-full max-w-xs"
            onChange={(e) => setProgress(e.target.value)}
          >
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
          <div className="flex flex-row justify-evenly w-full ">
            <Link href="/" className="w-fit ">
              <button className="btn bg-red-500">Cancel</button>
            </Link>
            <button className="btn bg-green-900">Add Project</button>
          </div>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default addProject;
