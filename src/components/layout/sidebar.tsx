"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Briefcase, Mail, FileText, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`relative min-h-screen bg-primary/30 backdrop-blur-lg text-white shadow-lg transition-all duration-300 z-50 ${
        isOpen ? "w-56" : "w-20"
      }`}
    >
      {/* hamburger sidebar toggle */}
      <button
        className="flex items-center justify-center px-4 py-3 w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} className="text-white" />
      </button>

      {/* current pages. 'on hover' overlay giving issues. */}
      {/* make sure to remember this nav layout. clean and sleek.  */}
      <nav className="flex flex-col space-y-4 mt-4">
        {[
          { href: "/", icon: <Home size={24} />, label: "Home" },
          { href: "/work", icon: <Briefcase size={24} />, label: "Work" },
          { href: "/contact", icon: <Mail size={24} />, label: "Contact" },
          { href: "/resume", icon: <FileText size={24} />, label: "Resume" },
        ].map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center p-2 rounded-lg hover:bg-purple-500 transition-all relative justify-center"
          >
            {icon}

            {/* 'on open' logo text for each label. maybe add icon in here? */}
            <span
              className={`ml-2 transition-all duration-300 ${
                isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              {label}
            </span>

            {/* 'on hover' tooltip */}
            {/* issues with background while hovering, both states open and close. */}
            {!isOpen && (
              <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
