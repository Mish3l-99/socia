import React from "react";

const Request = (props) => {
  return (
    <div className=" bg-gray-50 my-2 p-3 rounded-md">
      <div className="flex gap-3 items-center">
        <div className="relative">
          <img
            className="w-10 h-10 rounded-full"
            src={props.senderImg}
            alt="/"
          />
        </div>
        <div className="">
          <span className="text-[16px]">{props.senderName}</span>
          <span className="block text-muted">
            {props.mutualF + " mutual Friends."}
          </span>
        </div>
      </div>

      {/* accept decline */}
      <div className="mt-1 flex gap-2 text-sm">
        <button className="btn btn-primary">Accept</button>
        <button className="btn btn-secondary">Decline</button>
      </div>
    </div>
  );
};

export default Request;
