"use client";
import { FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'; // No need for the anchor tag here
import Profile from './profile.jpg';
import { motion } from 'framer-motion'; 

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full text-center md:text-left h-auto md:h-[550px] py-10 md:py-0 px-4 md:px-0 mt-8">
        
        {/* Text Section */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-auto md:mx-4 md:ml-[10%] w-full md:w-1/2 shadow-2xl p-4 md:p-10"
          initial={{ opacity: 0, y: -20 }} // Start from above and invisible
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          This is Hasnain Ali
          <br />
          <motion.span
            className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2"
            initial={{ opacity: 0, y: -20 }} // Start from above and invisible
            animate={{ opacity: 1, y: 0 }} // End position
            transition={{ duration: 0.5, delay: 0.2 }} // Add a delay for a staggered effect
          >
            A Passionate Website Developer
          </motion.span>

          <ul className="text-black space-y-2 sm:space-y-4 md:space-y-6 mt-4 sm:mt-6">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn.UI'].map((item, index) => (
              <motion.li
                key={index}
                className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-yellow-400"
                initial={{ opacity: 0, y: 20 }} // Start from below and invisible
                animate={{ opacity: 1, y: 0 }} // End position
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered delay for each list item
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* GitHub Section */}
          <div className="flex justify-center mt-10">
            <FaGithubSquare
              size={65}
              className="ml-4 transition-transform duration-300 ease-out hover:scale-125 mt-2"
            />
            <Link href="https://github.com/HasnainCodeHub" target="_blank">
              <motion.div
                className="h-14 sm:h-16 w-36 sm:w-48 bg-black rounded-xl p-8 text-white text-lg sm:text-xl md:text-2xl font-serif mt-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                initial={{ opacity: 0, scale: 0.8 }} // Start from smaller and invisible
                animate={{ opacity: 1, scale: 1 }} // End position
                transition={{ duration: 0.5, delay: 0.6 }} // Add a delay for the button
              >
                Github Account
              </motion.div>
            </Link>
          </div>
        </motion.h1>

        {/* Image Section with Animation */}
        <div className="flex justify-center mt-8 md:mt-0 w-full md:w-1/2 object-cover h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Final state for animation
            transition={{ duration: 0.5 }} // Animation duration
          >
            <Image
              src={Profile}
              alt="Picture of the author"
              className="shadow-lg bg-cover bg-center"
              width={500}
              height={400}
              priority
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
