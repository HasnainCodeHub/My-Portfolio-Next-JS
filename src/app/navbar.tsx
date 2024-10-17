"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Framer Motion animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideIn = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%' },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* Main Navigation Bar */}
      <motion.div
        className="h-[60px] flex items-center px-4 bg-cyan-950 justify-between"
        initial={{ opacity: 0, y: -20 }} // Initial state for navbar
        animate={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5 }} // Transition duration
      >
        {/* Logo / Brand */}
        <motion.div
          className="text-white text-2xl font-bold"
          initial={{ scale: 0.8 }} // Initial scale for logo
          animate={{ scale: 1 }} // Animate to full scale
          transition={{ duration: 0.5 }} // Transition duration
        >
          <Link href="/">My Portfolio</Link>
        </motion.div>

        {/* Menu Button for Small Devices */}
        <motion.button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }} // Scale down on click
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex gap-8">
          {["Home", "Projects", "Services", "About Me", "Contact Us"].map((link) => (
            <motion.button
              key={link}
              className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              <Link href={`/${link.replace(" ", "").toLowerCase()}`}>{link}</Link>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Dropdown Menu for Small Devices with Animation */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-end bg-cyan-950 w-[50%] absolute right-0 top-[60px] py-4 px-4 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideIn} // Slide in animation for dropdown
          transition={{ type: "spring", stiffness: 60 }} // Smooth spring animation
        >
          {["Home", "Projects", "Services", "About Me", "Contact Us"].map((link) => (
            <motion.button
              key={link}
              className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
            >
              <Link href={`/${link.replace(" ", "").toLowerCase()}`}>{link}</Link>
            </motion.button>
          ))}
        </motion.div>
      )}
    </main>
  );
}

export default Navbar;
