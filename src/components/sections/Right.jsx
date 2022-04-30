import React from "react";
import Messages from "../smaller/Messages";
import Requests from "../smaller/Requests";

const Right = () => {
  return (
    <div className="col-span-3 md:col-span-1 flex-1 overflow-y-auto">
      <Messages />
      <Requests />
    </div>
  );
};

export default Right;
