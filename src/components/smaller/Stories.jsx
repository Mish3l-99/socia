import React from "react";

const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        {/* image as background absolutely */}
        <div className="story-bg">
          <img
            className="object-cover h-full"
            src="https://picsum.photos/210"
            alt="/"
          />
        </div>
        <div className="z-20 w-7 h-7">
          <img
            className="object-fit rounded-full prof-s"
            src="https://picsum.photos/100"
            alt="/"
          />
        </div>
        <p className="z-20 name">Your Story</p>
      </div>
      <div className="story">
        {/* image as background absolutely */}
        <div className="story-bg">
          <img
            className="object-cover h-full"
            src="https://picsum.photos/220"
            alt="/"
          />
        </div>
        <div className="z-20 w-7 h-7">
          <img
            className="object-fit rounded-full prof-s"
            src="https://picsum.photos/110"
            alt="/"
          />
        </div>
        <p className="z-20 name">Lord Eddard</p>
      </div>
      <div className="story">
        {/* image as background absolutely */}
        <div className="story-bg">
          <img
            className="object-cover h-full"
            src="https://picsum.photos/230"
            alt="/"
          />
        </div>
        <div className="z-20 w-7 h-7">
          <img
            className="object-fit rounded-full prof-s"
            src="https://picsum.photos/120"
            alt="/"
          />
        </div>
        <p className="z-20 name">Jon Snow</p>
      </div>
      <div className="story">
        {/* image as background absolutely */}
        <div className="story-bg">
          <img
            className="object-cover h-full"
            src="https://picsum.photos/240"
            alt="/"
          />
        </div>
        <div className="z-20 w-7 h-7">
          <img
            className="object-fit rounded-full prof-s"
            src="https://picsum.photos/130"
            alt="/"
          />
        </div>
        <p className="z-20 name">Tyrion</p>
      </div>
      <div className="story">
        {/* image as background absolutely */}
        <div className="story-bg">
          <img
            className="object-cover h-full"
            src="https://picsum.photos/700"
            alt="/"
          />
        </div>
        <div className="z-20 w-7 h-7">
          <img
            className="object-fit rounded-full prof-s"
            src="https://picsum.photos/140"
            alt="/"
          />
        </div>
        <p className="z-20 name">Sansa</p>
      </div>
    </div>
  );
};

export default Stories;
