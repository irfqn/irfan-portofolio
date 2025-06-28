import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Experiences from "./components/Experiences.jsx";

const App = () =>{
  return (
    <main className="bg-black min-h-screen px-32">
      <Navbar/>
      <Hero/>
      <About/>
        <Experiences/>
    </main> 
  )
}

export default App