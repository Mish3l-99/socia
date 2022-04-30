import React from "react";
import { RiEditFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import Message from "./Message";

const messagesArray = [
  {
    senderImg: "https://picsum.photos/300",
    senderName: "Arya",
    text: "Not Today!",
    online: false,
  },
  {
    senderImg: "https://picsum.photos/310",
    senderName: "Melisandra",
    text: "the night is dark!",
    online: true,
  },
  {
    senderImg: "https://picsum.photos/320",
    senderName: "Ygritte",
    text: "remeber that cave?",
    online: false,
  },
  {
    senderImg: "https://picsum.photos/330",
    senderName: "Podrick Payne",
    text: "u know jenny's song, right?",
    online: true,
  },
];

const Messages = () => {
  return (
    <div className="messages">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Messages</h1>
        <RiEditFill />
      </div>
      <div className="my-3 flex items-center gap-2 bg-[#E7EEE7] px-4 py-1 rounded-full">
        <BsSearch />
        <input
          type="text"
          placeholder="Search messages..."
          className="py-1 bg-transparent"
        />
      </div>

      {/* render posts */}
      <div>
        {messagesArray.map((message, index) => {
          return (
            <Message
              key={index + 1}
              senderImg={message.senderImg}
              senderName={message.senderName}
              text={message.text}
              online={message.online}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
