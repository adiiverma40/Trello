import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className=" relative bottom-0  w-screen">
      <div
        className=" flex  bg-zinc-500 mx-auto  rounded-lg shadow-lg"
        style={{ width: "70%" }}
      >
        <div className="w-1/2">
          <h1 className="text-2xl font-extrabold text-white text-center my-3">
            Trello
          </h1>
        </div>
        <div className="w-1/2 ">
          <ul className="mx-2 my-2 flex justify-evenly items-center ">
            <li className="text-base text-white hover:cursor-pointer my-2 ">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-base text-white hover:cursor-pointer my-2 ">
              <NavLink to={"/"}>Social</NavLink>
            </li>
            <li className="text-base text-white hover:cursor-pointer my-2 ">
              <NavLink to={"/"}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
