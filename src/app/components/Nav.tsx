"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border border-y-4 border-black mt-10 bg-white px-4 sm:px-10 py-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-2xl">KARTHIK NAYAK</h1>
        <div className="hidden sm:flex gap-5 text-lg">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-2 text-lg">
          <a href="#about" onClick={toggleMenu}>
            About me
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
