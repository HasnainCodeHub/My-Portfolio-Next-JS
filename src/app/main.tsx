"use client";
import { IoOpen } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import Profile from './profile.jpg';
import { motion } from 'framer-motion'; 
import AllLang from '../app/alllang.jpg';

export default function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-700 flex items-center justify-center">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full text-center md:text-left py-10 md:py-0 px-4 md:px-0 mt-8 items-center justify-center">
        
        {/* Text Section */}
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-auto md:mx-4 md:ml-[10%] w-full md:w-1/2 shadow-2xl p-4 md:p-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          This is Hasnain Ali
          <br />
          <motion.span
            className="block text-lg sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-serif bg-gradient-to-r from-pink-400 via-red-300 to-yellow-400 text-transparent bg-clip-text shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A Passionate Website Developer <br /> And AI Enthusiast
          </motion.span>
          <div className="text-2xl py-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold shadow-sm">
            <p>TypeScript || Next.js || Tailwind CSS || Shadcn UI || Sanity || Stripe</p>
          </div>

          <div className="flex items-end py-5">
            <Image
              src={AllLang}
              alt="Programming languages banner"
              className="shadow-2xl bg-cover bg-center rounded-md"
              width={800}
              height={200}
              priority
            />
          </div>

          {/* GitHub Section */}
          <div className="flex justify-center mt-10">
            <IoOpen
              size={45}
              className="ml-4 transition-transform duration-300 ease-out hover:scale-125 mt-2 text-gradient-to-r from-yellow-400 via-red-400 to-pink-500"
            />
            <Link href="https://static-resume-seven-beta.vercel.app/" target="_blank">
              <motion.div
                className="h-14 sm:h-16 w-36 sm:w-48 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl p-8 text-white text-lg sm:text-xl md:text-2xl font-serif mt-2 flex justify-center items-center transition-transform duration-300 ease-out hover:scale-125 shadow-xl px-2 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                View Resume
              </motion.div>
            </Link>
          </div>
        </motion.h1>

        {/* Image Section with Animation */}
        <div className="flex justify-center mt-8 md:mt-0 w-full md:w-1/2 object-cover h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={Profile}
              alt="Profile of Hasnain Ali"
              className="shadow-2xl bg-cover bg-center rounded-xl"
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
