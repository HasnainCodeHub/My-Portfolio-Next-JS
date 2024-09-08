import BackImage from '../mainback.jpg'
function About() {
    return (
        <main className='bg-cover bg-center h-full' style={{ backgroundImage: `url(${BackImage.src})` }} >
            <div className='flex flex-col justify-center items-center'>
                <br />
                <br />
                <h1 className=' text-gray-400  text-9xl font-bold w-1/3'>About Me</h1>
                <div className=" ml-48 mr-48 mt-24">
                    <div className='text-white text-2xl font-mono'>I am a passionate developer with expertise in <p className='text-yellow-400 font-extrabold  italic'>TypeScript, Next.js, and Tailwind CSS.</p> With a strong foundation in modern web development,<br /> I create dynamic, responsive, and high-performance applications that prioritize both functionality and user experience.
                        <br />
                        <br />
                        <h1 className='text-yellow-400 font-serif text-4xl font-extrabold'>TypeScript: </h1>
                        I leverage TypeScript to build scalable and maintainable codebases, ensuring type safety and reducing bugs. This allows me to work efficiently in larger projects and collaborate seamlessly with other developers.
                        <br />
                        <br />
                        <h1 className='text-yellow-400 font-serif text-4xl font-extrabold'>Next.js: </h1>
                        I utilize Next.js to develop robust full-stack applications with server-side rendering, static site generation, and API routes. My experience with Next.js enables me to create fast, SEO-friendly web apps that are ready for production.
                        <br />
                        <br />
                        <br />
                        <h1 className='text-yellow-400 font-serif text-4xl font-extrabold'>Tailwind CSS: </h1>
                        I style my applications using Tailwind CSS, a utility-first CSS framework that empowers me to design visually appealing interfaces with minimal code. This approach leads to clean and efficient styling, resulting in responsive and modern user interfaces.
                        <br />
                        <br />
                        <br />
                        <h1 className='text-yellow-400 font-serif text-4xl font-extrabold'>Fast Turnaround Time: </h1>
                        I pride myself on delivering high-quality work within tight deadlines. With a deep understanding of TypeScript, Next.js, and Tailwind CSS, I am able to efficiently navigate complex projects, ensuring rapid development without compromising on quality. My streamlined workflow, attention to detail, and commitment to excellence allow me to consistently meet or exceed project timelines, giving you the results you need when you need them.
                        <br />
                        <br />
                        <br />
                        <p className='italic font-extrabold ml-24 mr-24 text-center'>
                            I am dedicated to staying up-to-date with the latest trends and best practices in the industry, continuously refining my skills to deliver top-notch solutions. My goal is to build applications that not only meet the requirements but also exceed expectations in terms of performance, accessibility, and design.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About