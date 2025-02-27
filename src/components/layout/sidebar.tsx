'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
// Sidebar icons
import { Home, Briefcase, Mail, FileText } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  
  return (
    <div className={`h-screen bg-primary text-text flex flex-col p-5 transition-all ${isOpen ? 'w-64' : 'w-20'}`}>
      <button
        className="text-xl mb-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ 
      </button>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className="flex items-center space-x-2 hover:text-accent">
          <Home size={24} />
          {isOpen && <span>Home</span>}
        </Link>
        <Link href="/work" className="flex items-center space-x-2 hover:text-accent">
          <Briefcase size={24} />
          {isOpen && <span>Work</span>}
        </Link>
        <Link href="/contact" className="flex items-center space-x-2 hover:text-accent">
          <Mail size={24} />
          {isOpen && <span>Contact</span>}
        </Link>
        <Link href="/resume" className="flex items-center space-x-2 hover:text-accent">
          <FileText size={24} />
          {isOpen && <span>Resume</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;