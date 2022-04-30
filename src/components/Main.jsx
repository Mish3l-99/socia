import React from "react";
import Left from "./sections/Left";
import Middle from "./sections/Middle";
import Right from "./sections/Right";

const Main = () => {
  return (
    <div className="overflow-auto">
      <div className="container mt-[50px]">
        <div className="h-[610px] flex gap-y-4 gap-x-5">
          <Left />
          <div className="flex-1 flex overflow-hidden">
            <div className="w-full grid grid-cols-3 gap-y-4 gap-x-5">
              <Middle />
              <Right />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
