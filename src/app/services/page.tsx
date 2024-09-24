import BackImage from '../mainback.jpg';

export default function Services() {
    return (
        <main className='bg-cover bg-center min-h-screen bg-slate-200' >
            {/* Heading Section */}
            <div className="flex flex-col text-center pl-8">
                <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mt-16 sm:mt-24  bg-cyan-950 w-[100%] rounded-2xl">
                    Services
                </h1>
            </div>

            {/* Services List */}
            <ol className="flex flex-col items-start pl-8 mt-12 sm:mt-16">
                {/* Custom Web Application Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">01: Custom Web Application Development</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Build dynamic and responsive web applications tailored to specific business needs using Next.js and React.
                    </p>
                </li>

                {/* Responsive UI/UX Design */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">02: Responsive UI/UX Design</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Design and implement responsive, aesthetically pleasing user interfaces using Tailwind CSS, ensuring a consistent experience across devices.
                    </p>
                </li>

                {/* Single Page Application Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">03: Single Page Application (SPA) Development</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Create efficient, highly responsive SPAs with Next.js, ensuring quick navigation and dynamic updates without full page reloads.
                    </p>
                </li>

                {/* Static Site Generation & SSR */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">04: Static Site Generation (SSG) & Server-Side Rendering (SSR)</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Leverage Next.js for optimizing website performance by implementing SSG and SSR, leading to faster load times and better SEO.
                    </p>
                </li>

                {/* API Integration & Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">05: API Integration & Development</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Develop and integrate RESTful APIs or GraphQL to connect front-end applications with back-end services, ensuring seamless data flow.
                    </p>
                </li>

                {/* Component-Based Architecture */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">06: Component-Based Architecture</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Use component-based architecture with React and Next.js to create modular, reusable, and maintainable codebases.
                    </p>
                </li>

                {/* Performance Optimization */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">07: Performance Optimization</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Enhance the performance of web applications by implementing best practices in code optimization, lazy loading, and efficient resource management.
                    </p>
                </li>

                {/* Cross-Browser Compatibility */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">08: Cross-Browser Compatibility</h1>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Ensure that web applications function correctly across various browsers and devices, offering a uniform experience for all users.
                    </p>
                </li>

                {/* E-Commerce Solutions */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl ">09: E-Commerce Solutions</h1>
                    <p className="text-lg sm:text-xl lg:text-xl  mt-4 font-serif">
                        Develop custom e-commerce platforms with Next.js, React, and Tailwind CSS, including shopping carts, payment gateways, and product management systems.
                    </p>
                </li>

                {/* CMS Integration */}
                <li className="mb-8">
                    <h3 className="text-2xl sm:text-2xl lg:text-2xl ">10: Content Management System (CMS) Integration</h3>
                    <p className="text-lg sm:text-xl lg:text-xl mt-4 font-serif">
                        Integrate headless CMS solutions like Strapi or Sanity with Next.js to provide clients with easy content management and updating capabilities.
                    </p>
                </li>
            </ol>
        </main>
    )
}
