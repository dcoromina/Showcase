import React from "react";

const AddProject = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="">
        <h1>Title</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default AddProject;
