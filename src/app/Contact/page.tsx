import Link from 'next/link'
import BackImage from '../mainback.jpg'
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";







function Contact() {
    return (
        <main className='bg-cover bg-center h-full' style={{ backgroundImage: `url(${BackImage.src})` }} >
            <div className='flex flex-col justify-center items-center'>
                <br />
                <br />
                <h1 className=' text-gray-300  text-8xl font-bold w-1/3'>Contact Me</h1>
            </div>
            <div className="flex items center justify-center mt-40 mr-8">
                <IoIosMail size={60} className='text-white' /><p className='text-white font-extrabold mt-3 ml-4 text-3xl'>azeemhusnain048@gmail.com</p>
            </div>
            <div className="flex items center justify-center mt-8 mr-56">
                <FaPhone size={60} className='text-white' /><p className='text-white font-extrabold mt-3 ml-4 text-3xl'>+923702537927</p>
            </div>
            <div className="flex h-12  justify-center items-center mt-24 ">
                <Link href="https://www.facebook.com/hasnainazeem.hasnainazeem.1/" target='_blank'><FaFacebook size={60} className='text-white mr-32 transition-transform duration-300 hover:scale-110 ' /></Link>
                <Link href="https://www.linkedin.com/in/hasnain-ali-developer/" target='_blank'><FaLinkedin size={60} className='text-white transition-transform duration-300 hover:scale-110' /></Link>
                <Link href="https://www.instagram.com/has_nain_333/" target='_blank'><FaInstagramSquare size={60} className='text-white ml-32  transition-transform duration-300 hover:scale-110' /></Link>
            </div>

            <br />
            <br />
            <div className='items-center justify-center flex'>
                <button className='h-16 w-48 bg-red-400 rounded-xl text-white text-2xl font-serif 
                transition-transform duration-300 hover:scale-110 '><Link href="/">Back To Home Page</Link></button>

            </div>
            <p className='italic font-extrabold ml-24 mr-24 text-center text-white text-3xl mt-32'>
                Thanks for visiting my portfolio. I hope you enjoyed your visit and I look forward to hearing from you soon.
                <br />
                <br />
                Have a great day!
                <br />
                <br />
                <br />
                <br />
            </p>

        </main>
    )
}

export default Contact