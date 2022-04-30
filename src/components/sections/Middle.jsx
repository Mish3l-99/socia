import React from "react";
import Stories from "../smaller/Stories";
import Posts from "../smaller/Posts";

const Middle = () => {
  return (
    <div className="col-span-3 h-screen md:col-span-2 flex-1 overflow-y-auto">
      <Stories />
      <Posts />
    </div>
  );
};

export default Middle;
