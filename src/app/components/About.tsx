"use client";

import Image from "next/image";
import React from "react";
import avatar from "../../../public/avatar.png";
import coderPng from "../../../public/coder.png";
export default function () {
  return (
    <div>
      <div id="about" className="mt-10 flex justify-center items-center">
        <div className=" mr-96 mx-10">
          <h1 className="text-4xl font-bold mb-2">
            Hello, I'm <span className="text-orange-400">Karthik Nayak</span>
          </h1>
          <p className="text-3xl font-bold mb-4">a passionate Web Developer</p>
          <p className=" text-lg text-justify text-wrap">
            I specialize in crafting sleek and functional web applications. I
            use Golang for backend development and React with TypeScript to
            build engaging user experiences.
          </p>
          <button
            onClick={() => {
              window.open("#contact", "_self");
            }}
            className="w-32 h-12 mt-7 bg-orange-400 border-black border-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]"
          >
            Lets Connect
          </button>
        </div>
        {/* <Image
          height={100}
          width={100}
          className="mr-80"
          src={coderPng}
          alt="TypeScript"
        /> */}
        <Image
          src={avatar}
          alt="Karthik's Avatar"
          width={250}
          height={250}
          className="rounded-full shadow-md"
        />
      </div>
    </div>
  );
}
