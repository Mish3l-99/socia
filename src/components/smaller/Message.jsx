import React from "react";

const Message = (props) => {
  return (
    <div className="flex py-3 items-center gap-3">
      <div className="relative">
        <img className="w-12 h-12 rounded-full" src={props.senderImg} alt="/" />
        {props.online && (
          <div className="absolute bg-green-500 w-3 h-3 rounded-full right-0 bottom-[2px] border"></div>
        )}
      </div>
      <div className="">
        <h4>{props.senderName}</h4>
        <p className="text-muted truncate">{props.text}</p>
      </div>
    </div>
  );
};

export default Message;
