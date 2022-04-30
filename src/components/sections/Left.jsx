import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { RiSettings5Fill, RiPaintBrushFill } from "react-icons/ri";
import { BsFillBookmarksFill } from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import Notifications from "../popovers/Notifications";

const Left = () => {
  return (
    <div className="hidden md:block md:w-[280px]">
      <div className=" w-full contain">
        {/* ****Profile******* */}
        <div className="profile flex mb-4">
          <div className="w-12 h-12">
            <img
              className="object-fit rounded"
              src="https://picsum.photos/200"
              alt="/"
            />
          </div>
          <div className="w-full ml-2">
            <h4 className="title">Diana Ali</h4>
            <p className="text-muted text-xs">@dayi</p>
          </div>
        </div>

        {/* ******List***** */}
        <div className="list">
          <ul>
            <li>
              <Link className="side-link flex items-center gap-2" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/">
                <MdExplore /> Explore
              </Link>
            </li>
            <li className="relative">
              <Link className="flex items-center gap-2" to="/">
                <AiFillBell /> Notifications{" "}
                <div className="badge">
                  <span>9+</span>
                </div>
              </Link>
              <Notifications />
            </li>
            <li className="relative">
              <Link className="flex items-center gap-2" to="/">
                <TiMessages /> Messages{" "}
                <div className="badge">
                  <span>2</span>
                </div>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/">
                <BsFillBookmarksFill /> Bookmarks
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/">
                <VscGraphLine /> Analytics
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/">
                <RiPaintBrushFill /> Theme
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" to="/">
                <RiSettings5Fill /> Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="mt-4">
          <button className="btn btn-primary w-full">Create Post</button>
        </div>
      </div>
    </div>
  );
};

export default Left;
