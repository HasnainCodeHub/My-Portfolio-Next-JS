import { FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'; // No need for the anchor tag here
import Profile from './profile.jpg';

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full text-center md:text-left h-auto md:h-[550px] py-10 md:py-0 px-4 md:px-0 mt-8">
        {/* Text Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-auto md:mx-4 md:ml-[10%] w-full md:w-1/2 shadow-2xl p-4 md:p-10 animate-fadeInSlow">
          This is Hasnain Ali
          <br />
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
            A Passionate Website Developer
          </span>

          <ul className="text-black space-y-2 sm:space-y-4 md:space-y-6 mt-4 sm:mt-6">
            <li className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Next.js
            </li>
            <li className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              TypeScript
            </li>
            <li className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Tailwind CSS
            </li>
            <li className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Shadcn.UI
            </li>
          </ul>

          {/* GitHub Section */}
          <div className="flex justify-center mt-10">
            <FaGithubSquare
              size={65}
              className="ml-4 transition-transform duration-300 ease-out hover:scale-125 mt-2"
            />
            <Link href="https://github.com/HasnainCodeHub" target="_blank">
              <div className="h-14 sm:h-16 w-36 sm:w-48 bg-black rounded-xl p-8 text-white text-lg sm:text-xl md:text-2xl font-serif mt-2 flex justify-center items-center transition-transform duration-300 hover:scale-110">
                Github Account
              </div>
            </Link>
          </div>
        </h1>

        <div className="flex justify-center mt-8 md:mt-0 w-full md:w-1/2">
          <Image
            src={Profile}
            alt="Picture of the author"
            className="rounded-bl-extraLarge rounded-tr-extraLarge shadow-lg bg-cover bg-center"
            width={400}
            height={500}
            priority
          />
        </div>
      </div>
    </main>
  );
}
