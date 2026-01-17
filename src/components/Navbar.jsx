import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white px-4 py-4 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-lg font-bold">Irfan Al Rasyid</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 font-medium">
          <a href="#experiences" className="hover:text-gray-300 transition">
            Experiences
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white hover:bg-neutral-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 flex flex-col space-y-4 font-medium">
          <a
            href="#experiences"
            onClick={handleClick}
            className="hover:text-gray-300 transition"
          >
            Experiences
          </a>
          <a
            href="#projects"
            onClick={handleClick}
            className="hover:text-gray-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleClick}
            className="hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
