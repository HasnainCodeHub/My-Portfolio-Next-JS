"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Ensure Image is imported from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence for menu animation
import Logo from '../app/logo.png';

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
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Logo / Brand */}
        <motion.div
          className="flex items-center text-white text-2xl font-bold p-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src={Logo} // Use the correct logo image
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
              priority
            />
          </Link>
        </motion.div>

        {/* Menu Button for Small Devices */}
        <motion.button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex gap-8">
          {["Home", "Projects", "Services", "About Me", "Contact Us"].map((link) => (
            <motion.button
              key={link}
              className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/${link.replace(" ", "").toLowerCase()}`}>{link}</Link>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Dropdown Menu for Small Devices with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-end bg-cyan-950 w-[70%] sm:w-[50%] absolute right-0 top-[60px] py-4 px-4 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideIn}
            transition={{ type: "spring", stiffness: 60 }}
          >
            {["Home", "Projects", "Services", "About Me", "Contact Us"].map((link) => (
              <motion.button
                key={link}
                className="rounded-3xl transition-all duration-300 hover:text-blue-400 text-white text-lg mb-4"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${link.replace(" ", "").toLowerCase()}`}>{link}</Link>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Navbar;
