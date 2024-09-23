import BackImage from '../mainback.jpg';

export default function Services() {
    return (
        <main className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${BackImage.src})` }}>
            {/* Heading Section */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-300 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center mt-16 sm:mt-24">
                    Services
                </h1>
            </div>

            {/* Services List */}
            <ol className="flex flex-col justify-center items-center mt-12 sm:mt-16">
                {/* Custom Web Application Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">01: Custom Web Application Development</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Build dynamic and responsive web applications tailored to specific business needs using Next.js and React.
                    </p>
                </li>

                {/* Responsive UI/UX Design */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">02: Responsive UI/UX Design</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Design and implement responsive, aesthetically pleasing user interfaces using Tailwind CSS, ensuring a consistent experience across devices.
                    </p>
                </li>

                {/* Single Page Application Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">03: Single Page Application (SPA) Development</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Create efficient, highly responsive SPAs with Next.js, ensuring quick navigation and dynamic updates without full page reloads.
                    </p>
                </li>

                {/* Static Site Generation & SSR */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">04: Static Site Generation (SSG) & Server-Side Rendering (SSR)</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Leverage Next.js for optimizing website performance by implementing SSG and SSR, leading to faster load times and better SEO.
                    </p>
                </li>

                {/* API Integration & Development */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">05: API Integration & Development</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Develop and integrate RESTful APIs or GraphQL to connect front-end applications with back-end services, ensuring seamless data flow.
                    </p>
                </li>

                {/* Component-Based Architecture */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">06: Component-Based Architecture</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Use component-based architecture with React and Next.js to create modular, reusable, and maintainable codebases.
                    </p>
                </li>

                {/* Performance Optimization */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">07: Performance Optimization</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Enhance the performance of web applications by implementing best practices in code optimization, lazy loading, and efficient resource management.
                    </p>
                </li>

                {/* Cross-Browser Compatibility */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">08: Cross-Browser Compatibility</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Ensure that web applications function correctly across various browsers and devices, offering a uniform experience for all users.
                    </p>
                </li>

                {/* E-Commerce Solutions */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">09: E-Commerce Solutions</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Develop custom e-commerce platforms with Next.js, React, and Tailwind CSS, including shopping carts, payment gateways, and product management systems.
                    </p>
                </li>

                {/* CMS Integration */}
                <li className="mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">10: Content Management System (CMS) Integration</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
                        Integrate headless CMS solutions like Strapi or Sanity with Next.js to provide clients with easy content management and updating capabilities.
                    </p>
                </li>
            </ol>
        </main>
    )
}
