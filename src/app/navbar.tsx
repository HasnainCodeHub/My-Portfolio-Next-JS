import Link from "next/link"

// function Navbar(){
//     return(
//         <main>
//       <div className="h-[60px] flex gap-10 justify-center">
//           <button className=" text-white rounded-3xl  "><Link href='/'>Home </Link ></button>
//           <button className=" text-white rounded-3xl   "><Link href='/services'>Services</Link></button>
//           <button className=" text-white rounded-3xl   "><Link href='/projects'>Projects</Link></button>
//           <button className=" text-white rounded-3xl    "><Link href='/About'>About Me</Link></button>
//           <button className=" text-white rounded-3xl  "><Link href='/Contact'>Contact Us</Link></button>
//         </div>
//     </main>
//     )
// }

// export default Navbar

function Navbar() {
    return (
      <main>
        <div className="h-[60px] flex gap-10 justify-center animate-fadeInDown">
          <button className="text-white rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110">
            <Link href="/">Home</Link>
          </button>
          <button className="text-white rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110">
            <Link href="/services">Services</Link>
          </button>
          <button className="text-white rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110">
            <Link href="/projects">Projects</Link>
          </button>
          <button className="text-white rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110">
            <Link href="/About">About Me</Link>
          </button>
          <button className="text-white rounded-3xl transition-all duration-300 hover:text-blue-400 hover:scale-110">
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
      </main>
    );
  }
  
  export default Navbar;