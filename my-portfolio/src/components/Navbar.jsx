import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-black text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center h-[100px]">
      <h1 className="text-3xl font-bold primary-color ml-4">Jimmy</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Navigation Toggle Button */}
      <div onClick={toggleNav} className="block md:hidden mr-6 cursor-pointer">
        {isNavOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl primary-color m-4">Jimmy</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;