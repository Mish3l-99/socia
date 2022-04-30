import React from "react";
import {
  BsThreeDots,
  BsBookmarks,
  BsBookmarksFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const Post = (props) => {
  return (
    <div className="post">
      {/* top info and profile-img */}
      <div className="top">
        <div className="w-12 h-12">
          <img
            className="object-cover rounded-full"
            src={props.posterProfile}
            alt="/"
          />
        </div>
        <div className="w-full flex justify-between">
          <div>
            <h3>{props.poster}</h3>
            <p className="text-muted">
              {props.location + ", " + props.time + " ago."}
            </p>
          </div>
          <div>
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
      </div>

      {/* post image */}
      <div className="post-img">
        <img className="w-full object-cover" src={props.postImg} alt="/" />
      </div>

      {/* buttons-area */}
      <div className="buttons">
        <div className="flex justify-center items-center gap-2">
          <button>
            <BsHeart size={20} />
            {/* <BsHeartFill size={20} /> */}
          </button>
          <button>
            <FaRegComments size={20} />
          </button>
          <button>
            <BiShareAlt size={20} />
          </button>
        </div>
        <div>
          <button>
            <BsBookmarks size={20} />
            {/* <BsBookmarksFill size={20} /> */}
          </button>
        </div>
      </div>

      {/* liked by */}
      <div className="liked-by">
        <div className="flex items-center">
          <div className="img">
            <img
              src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
              alt="/"
            />
          </div>
          <div className="img">
            <img
              src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
              alt="/"
            />
          </div>
          <div className="img">
            <img
              src="https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8"
              alt="/"
            />
          </div>
        </div>
        <p>
          Liked by <b>{props.likedBy}</b> and <b>{props.others + " others."}</b>
        </p>
      </div>

      {/* caption */}
      <div className="flex items-center gap-2 px-3">
        <h3 className="text-[15px] truncate">{props.poster}</h3>
        <span className="truncate">{props.caption}</span>
      </div>

      {/* view comments */}
      <div className="px-3 ">
        <button className="text-muted">View All comments</button>
      </div>
    </div>
  );
};

export default Post;
