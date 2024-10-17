"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function About() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(7).fill(false)); // Adjust the size based on the number of sections

    // Check if an element is in the viewport
    const isElementInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        // Get all elements to check
        const sections = document.querySelectorAll('.animate-section');
        const newVisibleItems = [...visibleItems];

        sections.forEach((section, index) => {
            if (isElementInViewport(section as HTMLElement)) {
                newVisibleItems[index] = true; // Mark as visible
            } else {
                newVisibleItems[index] = false; // Mark as not visible
            }
        });

        setVisibleItems(newVisibleItems);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='bg-cover bg-center h-full bg-slate-200'>
            <div className='flex flex-col justify-center items-center'>
                {/* Responsive spacing for all devices */}
                <div className="pt-12 sm:pt-16 lg:pt-24">
                    <motion.h1
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={visibleItems[0] ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                        transition={{ duration: 0.5 }}
                        className='text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center sm:w-[100%] lg:w-[100%] bg-cyan-950 rounded-2xl'
                    >
                        About Me
                    </motion.h1>
                </div>

                {/* Content Section */}
                <div className="px-4 sm:px-8 lg:px-24 xl:px-48 mt-12 sm:mt-16 lg:mt-24">
                    <div className='text-lg sm:text-xl lg:text-2xl font-serif'>
                        <motion.div
                            className='animate-section' // Added class for targeting
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={visibleItems[1] ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hello, I'm Hasnain Ali, a passionate and driven web developer with a strong background in creating dynamic, scalable, and responsive websites. With expertise in modern web technologies such as  
                            <span className='text-cyan-950 font-extrabold italic font-mono'> TypeScript, Next.js, Tailwind CSS, And Sanity CMS.</span>
                            I bring to life seamless user experiences and high-performance web applications.
                        </motion.div>

                        <br />

                        {/* Section: TypeScript */}
                        {['TypeScript', 'Next.js', 'Tailwind CSS', 'Shandcn.ui', 'Fast Turnaround Time'].map((title, index) => (
                            <motion.div
                                key={index}
                                className='animate-section' // Added class for targeting
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={visibleItems[index + 2] ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className='text-cyan-950 font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-6'>
                                    {title}:
                                </h1>
                                <div>
                                    {index === 0 && (
                                        <div>
                                            I leverage TypeScript to build scalable and maintainable codebases, ensuring type safety and reducing bugs. This allows me to work efficiently in larger projects and collaborate seamlessly with other developers.
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div>
                                            I utilize Next.js to develop robust full-stack applications with server-side rendering, static site generation, and API routes. My experience with Next.js enables me to create fast, SEO-friendly web apps that are ready for production.
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div>
                                            I style my applications using Tailwind CSS, a utility-first CSS framework that empowers me to design visually appealing interfaces with minimal code. This approach leads to clean and efficient styling, resulting in responsive and modern user interfaces.
                                        </div>
                                    )}
                                    {index === 3 && (
                                        <div>
                                            I utilize Shandcn.ui to create visually appealing and user-friendly interfaces that enhance user experience.
                                        </div>
                                    )}
                                    {index === 4 && (
                                        <div>
                                            I pride myself on delivering high-quality work within tight deadlines. With a deep understanding of TypeScript, Next.js, and Tailwind CSS, I am able to efficiently navigate complex projects, ensuring rapid development without compromising on quality.
                                        </div>
                                    )}
                                </div>
                                <br />
                            </motion.div>
                        ))}

                        {/* Closing statement */}
                        <motion.p
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={visibleItems[7] ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5 }}
                            className='italic font-extrabold mt-6 text-center px-4 sm:px-16 lg:px-24 font-mono'
                        >
                            I am dedicated to staying up-to-date with the latest trends and best practices in the industry, continuously refining my skills to deliver top-notch solutions. My goal is to build applications that not only meet the requirements but also exceed expectations in terms of performance, accessibility, and design.
                        </motion.p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
