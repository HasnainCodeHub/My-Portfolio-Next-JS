import Navbar from './navbar';
import Services from './services/page';
import About from './About/page';
import Contact from './Contact/page';
import Main from './main';
import FetchProjects from './projects/page'; 

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen transition-opacity duration-700 ease-in bg-slate-50"
    >
      <Navbar />
      <Main />
      <FetchProjects /> 
      <Services />
      <About />
      <Contact />
    </main>
  );
}
