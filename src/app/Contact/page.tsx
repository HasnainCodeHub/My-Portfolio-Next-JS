import Link from 'next/link';
import BackImage from '../mainback.jpg';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

function Contact() {
    return (
        <main className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${BackImage.src})` }}>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-gray-300 text-4xl sm:text-6xl md:text-8xl font-bold text-center mt-16'>
                    Contact Me
                </h1>
            </div>

            {/* Email Section */}
            <div className="flex items-center justify-center mt-20 sm:mt-28 space-x-4">
                <IoIosMail size={50} className='text-white' />
                <p className='text-white font-extrabold text-xl sm:text-2xl md:text-3xl'>
                    azeemhusnain048@gmail.com
                </p>
            </div>

            {/* Phone Section */}
            <div className="flex items-center justify-center mt-8 space-x-4">
                <FaPhone size={50} className='text-white' />
                <p className='text-white font-extrabold text-xl sm:text-2xl md:text-3xl'>
                    +923702537927
                </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center mt-20 sm:mt-28 space-x-16">
                <Link href="https://www.facebook.com/hasnainazeem.hasnainazeem.1/" target='_blank'>
                    <FaFacebook size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
                <Link href="https://www.linkedin.com/in/hasnain-ali-developer/" target='_blank'>
                    <FaLinkedin size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
                <Link href="https://www.instagram.com/has_nain_333/" target='_blank'>
                    <FaInstagramSquare size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
            </div>

            {/* Back Button */}
            <div className='flex justify-center mt-20 sm:mt-28'>
                <button className='h-12 w-36 sm:h-16 sm:w-48 bg-red-400 rounded-xl text-white text-lg sm:text-2xl font-serif transition-transform duration-300 hover:scale-110'>
                    <Link href="/">Back To Home Page</Link>
                </button>
            </div>

            {/* Thank You Note */}
            <p className='italic font-extrabold text-white text-xl sm:text-2xl md:text-3xl text-center mt-16 sm:mt-24 px-4 sm:px-16 lg:px-32'>
                Thanks for visiting my portfolio. I hope you enjoyed your visit and I look forward to hearing from you soon.
                <br />
                <br />
                Have a great day!
            </p>
        </main>
    );
}

export default Contact;
