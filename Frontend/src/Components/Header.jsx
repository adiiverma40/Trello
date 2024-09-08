import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="w-screen bg-zinc-600 h-14">
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-2xl font-bold text-white m-4 p-4 hover:cursor-pointer">
          Trello
        </h2>
        <ul className="w-full h-full flex justify-evenly items-center">
          <li className="text-base text-white text-center hover:cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-base text-white text-center hover:cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-base text-white text-center hover:cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-base text-white text-center hover:cursor-pointer">
            <NavLink to={"/sign"}>Sign Up</NavLink>
          </li>
          <li className="text-base text-white text-center hover:cursor-pointer">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
