import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/jamesvail", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/james-vail", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/jamesvaill", icon: Instagram, label: "Instagram" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-primary/80 text-white py-4 mt-auto border-t border-accent/30">
      {/* rainbow border */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-2 md:mb-0">&copy; {currentYear} James Vail. All Rights Reserved.</p>

        <div className="flex space-x-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link 
              key={href} 
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;