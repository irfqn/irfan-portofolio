import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Experiences from "./components/Experiences.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <main className="bg-black min-h-screen px-4">
      <div className="max-w-[1440px] mx-auto px-32 max-md:px-20 max-sm:px-12">
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Contact />
      </div>
    </main>
  )
}


export default App