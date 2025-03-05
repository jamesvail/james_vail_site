"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Mail, FileText, Menu, X } from "lucide-react";

type NavItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", icon: <Home size={24} />, label: "Home" },
  { href: "/work", icon: <Briefcase size={24} />, label: "Work" },
  { href: "/contact", icon: <Mail size={24} />, label: "Contact" },
  { href: "/resume", icon: <FileText size={24} />, label: "Resume" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  
  // mobile check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setIsOpen(false);
    };
    
    // call the effect check
    checkScreenSize();
    
    // call screen check if windows resized.
    // going to have to look at adding this everywhere thanks stackoverflow.
    window.addEventListener("resize", checkScreenSize);
    
    // make sure this works. remove after effect is done. 
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <aside 
      className={`fixed md:relative h-screen bg-primary/90 backdrop-blur-lg text-white shadow-lg transition-all duration-300 z-50 ${
        isOpen ? "w-56" : "w-20"
      } ${isMobile && !isOpen ? "-translate-x-20" : "translate-x-0"}`}
      aria-label="Main navigation"
    >
      {/* hamburger button */}
<button
  className="flex items-center justify-center w-full h-16 border-b border-accent/20"
  onClick={() => setIsOpen(!isOpen)}
  aria-label={isOpen ? "Collapse menu" : "Expand menu"}
>
  <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-purple-500/20 transition-all">
    {isOpen ? <X size={22} /> : <Menu size={22} />}
  </div>
</button>

{/* all links */}
<nav className="flex flex-col space-y-4 mt-6">
  {navItems.map(({ href, icon, label }) => {
    const isActive = pathname === href;
    
    return (
      <Link
        key={href}
        href={href}
        className={`group flex items-center relative py-2 transition-all duration-300 
          ${isOpen 
            ? "px-3 rounded-lg " + (isActive 
                ? "bg-purple-500 text-white" 
                : "hover:bg-purple-500/20 hover:text-purple-400")
            : "justify-center"
          }`}
        aria-current={isActive ? "page" : undefined}
      >
        {/* container icon */}
        <div 
          className={`flex items-center justify-center rounded-full transition-all duration-300
            ${isOpen ? "w-10 h-10" : "w-12 h-12"}
            ${isActive 
              ? "text-white" 
              : !isOpen ? "text-white hover:bg-purple-500/20 hover:text-purple-400" : ""
            }`}
        >
          {icon}
        </div>

        {/* text label with smoother transition */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "w-auto opacity-100 ml-2" : "w-0 opacity-0"}`}
        >
          <span className="text-base whitespace-nowrap">
            {label}
          </span>
        </div>

        {/* tooltip when closed */}
        {!isOpen && (
          <span className="absolute left-16 px-2 py-1 text-sm bg-primary border border-purple-500/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            {label}
          </span>
        )}
      </Link>
    );
  })}
</nav>
    </aside>
  );
};

export default Sidebar;