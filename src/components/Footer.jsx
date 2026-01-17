import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-800 py-10 text-center text-gray-400">
      <div className="flex flex-col items-center gap-4">
        {/* Name & Role */}
        <div>
          <p className="text-white font-semibold">Irfan Al Rasyid</p>
          <p className="text-sm">Full Stack Web Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/irfqn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/irfanalrasyid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:irfanalrasyid96@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Irfan Al Rasyid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
