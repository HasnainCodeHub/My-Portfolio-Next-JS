'use client';
import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [thankYouVisible, setThankYouVisible] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                console.error('Error sending message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Check if an element is in the viewport
    const isElementInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        const formSection = document.querySelector('#contact-form');
        const thankYouSection = document.querySelector('#thank-you-note');

        if (formSection && isElementInViewport(formSection as HTMLElement)) {
            setFormVisible(true);
        }

        if (thankYouSection && isElementInViewport(thankYouSection as HTMLElement)) {
            setThankYouVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='bg-cover bg-center min-h-screen bg-cyan-950 py-8 px-4 sm:px-8 lg:px-24'>
            {/* Contact Me Heading */}
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl sm:text-6xl md:text-8xl font-bold text-center mt-16 bg-black rounded-2xl p-4'>
                    Contact Me
                </h1>
            </div>

            {/* Email Section */}
            <div className='flex items-center justify-center mt-12 sm:mt-20 space-x-4'>
                <IoIosMail size={50} className='text-white' />
                <p className='text-white font-extrabold text-xl sm:text-2xl md:text-3xl'>
                    azeemhusnain048@gmail.com
                </p>
            </div>

            {/* Phone Section */}
            <div className='flex items-center justify-center mt-8 space-x-4'>
                <FaPhone size={50} className='text-white' />
                <p className='text-white font-extrabold text-xl sm:text-2xl md:text-3xl'>
                    +923702537927
                </p>
            </div>

            {/* Social Media Links */}
            <div className='flex justify-center items-center mt-12 sm:mt-20 space-x-10'>
                <Link href='https://www.facebook.com/hasnainazeem.hasnainazeem.1/' target='_blank'>
                    <FaFacebook size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
                <Link href='https://www.linkedin.com/in/hasnain-ali-developer/' target='_blank'>
                    <FaLinkedin size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
                <Link href='https://www.instagram.com/has_nain_333/' target='_blank'>
                    <FaInstagramSquare size={50} className='text-white transition-transform duration-300 hover:scale-110' />
                </Link>
            </div>

            {/* Contact Form Section */}
            <div className='flex flex-col items-center justify-center mt-16 sm:mt-24'>
                {submitted ? (
                    <motion.div
                        id='thank-you-note'
                        initial={{ opacity: 0, y: 20 }}
                        animate={thankYouVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className='text-yellow-600 font-bold text-2xl text-center'>Thank you for contacting me! I'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        id='contact-form'
                        onSubmit={handleSubmit}
                        className='w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-6'
                        initial={{ opacity: 0, y: 20 }}
                        animate={formVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Your Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Your Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-950'
                                placeholder='Enter your message'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full py-3 bg-cyan-950 text-white font-bold rounded-md hover:bg-cyan-700 transition-colors duration-300'
                        >
                            Send Message
                        </button>
                    </motion.form>
                )}
            </div>

            {/* Back to Home Button */}
            <div className='flex justify-center mt-16 sm:mt-24'>
                <button className='h-12 w-36 sm:h-16 sm:w-48 bg-black rounded-xl text-white text-lg sm:text-2xl font-serif transition-transform duration-300 hover:scale-110'>
                    <Link href='/'> Home Page</Link>
                </button>
            </div>

            {/* Thank You Note */}
            <motion.p
                id='thank-you-note'
                className='italic font-extrabold text-white text-xl sm:text-2xl md:text-3xl text-center mt-12 sm:mt-16'
                initial={{ opacity: 0, y: 20 }}
                animate={thankYouVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                Thanks for visiting my portfolio. I hope you enjoyed your visit and I look forward to hearing from you soon.
                <br />
                Have a great day!
            </motion.p>
        </main>
    );
}
