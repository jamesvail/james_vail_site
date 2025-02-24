"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold cursor-pointer">James Vail</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="/projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
