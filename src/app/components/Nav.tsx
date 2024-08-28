import React from "react";

export default function Nav() {
  return (
    <nav className="flex justify-between border border-y-4 border-black mt-10 bg-white px-10 py-5">
      <h1 className="font-bold text-2xl">KARTHIK NAYAK</h1>
      <div className="flex gap-5 text-lg">
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
