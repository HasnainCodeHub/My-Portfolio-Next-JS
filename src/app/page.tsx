import BackImage from './mainback.jpg'
import Profile from './profile.jpg'
import Navbar from './navbar';
import Image from 'next/image';
import Services from './services/page';
import Projects from './projects/page';
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";
import About from './About/page';
import Contact from './Contact/page';




export default function Home() {
  return (
    <main
      className="bg-cover bg-center h-full transition-opacity duration-700 ease-in"
      style={{ backgroundImage: `url(${BackImage.src})` }}
    >
      <Navbar />

      <div className="flex w-full text-center h-[750px]">
        <h1 className="text-white text-7xl font-bold ml-[280px] w-1/3 shadow-2xl p-20 animate-fadeInSlow">
          This is Hasnain Ali
          <br />
          <span className="block">A Passionate Website Developer</span>
          <ul className="text-black  space-y-6">
            <li className="text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Next.js
            </li>
            <li className="text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              TypeScript
            </li>
            <li className="text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Tailwind CSS
            </li>
            <li className="text-4xl font-bold transition-colors duration-300 hover:text-yellow-400">
              Shardcn.UI
            </li>
          </ul>
        </h1>
        <Image
          src={Profile}
          alt="Picture of the author"
          className="rounded-bl-extraLarge rounded-tr-extraLarge ml-[250px] mt-[100px] bg-cover bg-center w-[500px] h-[600px] animate-fadeInSlow"
        />
      </div>

      <div className="flex justify-center mt-10">
        <FaGithubSquare
          size={55}
          className="ml-4 text-white transition-transform duration-300 ease-out hover:scale-125"
        />
        <button className="h-16 w-48 bg-black rounded-xl text-white text-2xl font-serif mt-2 ml-4 transition-transform duration-300 hover:scale-110">
          <Link
            href="https://github.com/Hasnain-Software-Developer"
            target="_blank"
          >
            Github Account
          </Link>
        </button>
      </div>

      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}



// export default function Home() {

//   return (
//     <main className='bg-cover bg-center h-full' style={{ backgroundImage: `url(${BackImage.src})` }} >
//           <Navbar />

//         <div className='flex  w-[full] text-center h-650px]'>
//           <h1 className=' text-white text-7xl font-bold ml-[280px] w-1/3  shadow-2xl p-20'>This is  Hasnain Ali <br />A Passionate Website Developer        
//              <li className='text-black text-5xl font-bold mt-8 '>Next JS</li>
//              <li className='text-black text-5xl font-bold  '>Typscript</li>
//              <li className='text-black text-5xl font-bold  '>Tailwind CSS</li>
//              <li className='text-black text-5xl font-bold  '>Shardcn.UI</li>
//           </h1>
//           <Image src={Profile} alt="Picture of the author"  className='rounded-bl-extraLarge rounded-tr-extraLarge ml-[250px] mt-[100px] bg-cover Bg-center w-[500px] h-[600px]' />

//           </div>
//         <div className='flex '>
//           <FaGithubSquare size={55} className='ml-[650px] mt-2' />
//           <button className='h-16 w-48 bg-black rounded-xl text-white text-2xl font-serif mt-2'><Link href="https://github.com/Hasnain-Software-Developer" target='_blank' >Github Account</Link></button>


//         </div>
//         <Services />
//         <Projects />
//         <About />
//         <Contact />

//     </main>
//   );
// }
