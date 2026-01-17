import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="bg-black min-h-screen px-4">
      <div className="max-w-[1440px] mx-auto px-32 max-md:px-20 max-sm:px-12">
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
