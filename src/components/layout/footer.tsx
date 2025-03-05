import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white text-center py-4 mt-auto border-t-2 border-transparent">
      {/* 'main' separation */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
      
      <p className="text-sm">&copy; {new Date().getFullYear()} James Vail. All Rights Reserved.</p>

      {/* deprecated icons currently */}
      <div className="flex justify-center space-x-4 mt-2">
        <Link href="https://github.com/jamesvail">
          <Github size={20} className="hover:text-accent transition" />
        </Link>
        <Link href="https://linkedin.com/in/james-vail">
          <Linkedin size={20} className="hover:text-accent transition" />
        </Link>
        <Link href="https://instagram.com/jamesvaill">
          <Instagram size={20} className="hover:text-accent transition" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
