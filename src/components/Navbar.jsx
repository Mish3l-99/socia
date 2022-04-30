import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiClover } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-full fixed z-30 shadow bg-gray-50">
      <div className="nav-container">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <GiClover />
            <span>Socia</span>
          </div>

          {/* Search */}
          <div className="search">
            <BsSearch />
            <input
              className="ml-2 bg-transparent w-full text-sm"
              type="text"
              placeholder="Search for creators, inspirations and projects.."
            />
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <button className="btn btn-primary mr-2">Create</button>
            <img
              src="https://picsum.photos/200"
              alt="/"
              className="w-8 h-8 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
