import React from "react";
import Request from "./Request";

const requestsArray = [
  {
    senderImg: "https://picsum.photos/400",
    senderName: "Ser Barristan",
    mutualF: 8,
  },
  {
    senderImg: "https://picsum.photos/410",
    senderName: "Jaime Lannister",
    mutualF: 18,
  },
  {
    senderImg: "https://picsum.photos/420",
    senderName: "Sam Tarly",
    mutualF: 3,
  },
];

const Requests = () => {
  return (
    <div className="requests">
      <div className="">
        <h3>Requests</h3>
      </div>
      {/* render requests */}
      <div>
        {requestsArray.map((request, index) => {
          return (
            <Request
              key={index + 1}
              senderImg={request.senderImg}
              senderName={request.senderName}
              mutualF={request.mutualF}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
