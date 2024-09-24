"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* Main Navigation Bar */}
      <div className="h-[60px] flex items-center px-4 bg-cyan-950">
        {/* Logo / Brand */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* Menu Button for Small Devices */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex gap-8 ml-[200px]">
          <button className="rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white">
            <Link href="/">Home</Link>
          </button>
          
          <button className="rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white">
            <Link href="/projects">Projects</Link>
          </button>
          <button className="rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white">
            <Link href="/services">Services</Link>
          </button>
          <button className="rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white">
            <Link href="/About">About Me</Link>
          </button>
          <button className="rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white">
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Devices */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-cyan-950 w-full py-4">
          <button
            className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
            onClick={toggleMenu}
          >
            <Link href="/">Home</Link>
          </button>
       
          <button
            className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
            onClick={toggleMenu}
          >
            <Link href="/projects">Projects</Link>
          </button>
          <button
            className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
            onClick={toggleMenu}
          >
            <Link href="/services">Services</Link>
          </button>
          <button
            className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
            onClick={toggleMenu}
          >
            <Link href="/About">About Me</Link>
          </button>
          <button
            className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg"
            onClick={toggleMenu}
          >
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
      )}
    </main>
  );
}

export default Navbar;
