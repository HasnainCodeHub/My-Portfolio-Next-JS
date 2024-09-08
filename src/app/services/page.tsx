
import BackImage from '../mainback.jpg'

export default function Services() {
    return (
        <main className='bg-cover bg-center h-full' style={{ backgroundImage: `url(${BackImage.src})` }}>
            <div className=" flex flex-col justify-center items-center">
                <h1 className="text-gray-700 text-9xl font-bold mt-24 w-1/3">Services</h1>

            </div>
            <ol className=" flex-col justify-center items-center ">
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">01:Custom Web Application Development:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Build dynamic and responsive web applications tailored to specific <br />Business needs using Next.js and React.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">02:Responsive UI/UX Design:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Design and implement responsive and aesthetically pleasing user interfaces <br />Using Tailwind CSS, ensuring a consistent experience across devices.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">03:Single Page Application (SPA) Development:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">  Design and implement responsive and aesthetically pleasing user interfaces using Tailwind CSS,<br /> Ensuring a consistent experience across devices.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">04:Static Site Generation (SSG) & Server-Side Rendering (SSR):</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Leverage Next.js for optimizing website performance by implementing SSG and SSR, <br />Leading to faster load times and better SEO.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">05:API Integration & Development:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Develop and integrate RESTful APIs or GraphQL to connect front-end applications with <br />Back-end services, Ensuring seamless data flow.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">06:Component-Based Architecture:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Build dynamic and responsive web applications tailored to specific <br />Business needs using Next.js and React.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">07:Performance Optimization:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Enhance the performance of web applications by implementing best practices in code optimization,<br /> Lazy loading, and efficient resource management.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">08:Cross-Browser Compatibility:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">  Ensure that web applications function correctly across various browsers and devices,<br /> Offering a uniform experience for all users.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">09:E-Commerce Solutions:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Develop custom e-commerce platforms with Next.js, React, and Tailwind CSS, including shopping carts,<br /> Payment gateways, and product management systems.</p>
                </li>
                <br />
                <li>
                    <h1 className="text-4xl text-white mt-12 ml-12">10:Content Management System (CMS) Integration:</h1>
                    <br />
                    <p className="text-2xl text-white ml-12">Integrate headless CMS solutions like Strapi or Sanity with Next.js <br /> To provide clients with easy content management and updating capabilities.</p>
                </li>
            </ol>
        </main>

    )

}