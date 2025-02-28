"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Briefcase, Mail, FileText } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-blue-600 text-white flex flex-col p-5 transition-all ${isOpen ? "w-50" : "w-20"} shadow-lg`}>
      <button
        className="text-2xl mb-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-500">
          <Home size={24} />
          {isOpen && <span>Home</span>}
        </Link>
        <Link href="/work" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-500">
          <Briefcase size={24} />
          {isOpen && <span>Work</span>}
        </Link>
        <Link href="/contact" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-500">
          <Mail size={24} />
          {isOpen && <span>Contact</span>}
        </Link>
        <Link href="/resume" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-500">
          <FileText size={24} />
          {isOpen && <span>Resume</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
