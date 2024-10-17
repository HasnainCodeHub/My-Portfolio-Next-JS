"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Define the fade-in animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(10).fill(false)); // Adjust the size based on the number of services

    // Check if an element is in the viewport
    const isElementInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const handleScroll = () => {
        // Get all service list items to check
        const sections = document.querySelectorAll('.service-item');
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
        <main className='bg-cover bg-center min-h-screen bg-slate-200'>
            {/* Heading Section */}
            <div className="flex flex-col text-center pl-8">
                <motion.h1
                    className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mt-16 sm:mt-24 bg-cyan-950 w-[100%] rounded-2xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5 }} // Transition duration for heading
                >
                    Services
                </motion.h1>
            </div>

            {/* Services List */}
            <ol className="flex flex-col items-start pl-8 mt-12 sm:mt-16">
                {/* Service items */}
                {[
                    {
                        title: "Custom Web Application Development",
                        description: "Build dynamic and responsive web applications tailored to specific business needs using Next.js and React.",
                    },
                    {
                        title: "Responsive UI/UX Design",
                        description: "Design and implement responsive, aesthetically pleasing user interfaces using Tailwind CSS, ensuring a consistent experience across devices.",
                    },
                    {
                        title: "Single Page Application (SPA) Development",
                        description: "Create efficient, highly responsive SPAs with Next.js, ensuring quick navigation and dynamic updates without full page reloads.",
                    },
                    {
                        title: "Static Site Generation (SSG) & Server-Side Rendering (SSR)",
                        description: "Leverage Next.js for optimizing website performance by implementing SSG and SSR, leading to faster load times and better SEO.",
                    },
                    {
                        title: "API Integration & Development",
                        description: "Develop and integrate RESTful APIs or GraphQL to connect front-end applications with back-end services, ensuring seamless data flow.",
                    },
                    {
                        title: "Component-Based Architecture",
                        description: "Use component-based architecture with React and Next.js to create modular, reusable, and maintainable codebases.",
                    },
                    {
                        title: "Performance Optimization",
                        description: "Enhance the performance of web applications by implementing best practices in code optimization, lazy loading, and efficient resource management.",
                    },
                    {
                        title: "Cross-Browser Compatibility",
                        description: "Ensure that web applications function correctly across various browsers and devices, offering a uniform experience for all users.",
                    },
                    {
                        title: "E-Commerce Solutions",
                        description: "Develop custom e-commerce platforms with Next.js, React, and Tailwind CSS, including shopping carts, payment gateways, and product management systems.",
                    },
                    {
                        title: "Content Management System (CMS) Integration",
                        description: "Integrate headless CMS solutions like Strapi or Sanity with Next.js to provide clients with easy content management and updating capabilities.",
                    },
                ].map((service, index) => (
                    <motion.li
                        key={index}
                        className="service-item mb-8" // Added class for targeting
                        initial="hidden"
                        animate={visibleItems[index] ? "visible" : "hidden"} // Animate based on visibility
                        variants={fadeIn}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
                    >
                        <h1 className="text-2xl sm:text-2xl lg:text-2xl">
                            {`${String(index + 1).padStart(2, '0')}: ${service.title}`}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                            {service.description}
                        </p>
                    </motion.li>
                ))}
            </ol>
        </main>
    );
}
