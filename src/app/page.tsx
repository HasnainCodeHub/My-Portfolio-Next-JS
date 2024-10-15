// pages/index.tsx or appropriate path
import Navbar from './navbar';
import Services from './services/page';
// import Projects from './projects/page';
import About from './About/page';
import Contact from './Contact/page';
import Main from './main';
import FetchProjects from './projects/page'; // Adjust path as necessary

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen transition-opacity duration-700 ease-in bg-slate-50"
      // style={{ backgroundImage: `url(${BackImage.src})` }}
    >
      <Navbar />

      {/* Hero Section */}
      <Main />

      {/* Other Sections */}
      {/* <Projects /> */}
      <FetchProjects /> 
      <Services />
      <About />
      <Contact />
    </main>
  );
}
