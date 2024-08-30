import React from "react";
import Image from "next/image";

import golangPng from "../../../public/golang.png";
import typescriptPng from "../../../public/typescript.png";
import javascriptPng from "../../../public/javascript.png";
import reactPng from "../../../public/react.png";
import sqlPng from "../../../public/sql.png";
import nodePng from "../../../public/node.png";
import mongodbPng from "../../../public/mongodb.png";
import linuxPng from "../../../public/linux.png";
import pythonPng from "../../../public/python.png";
import nextPng from "../../../public/next.png";
import expressPng from "../../../public/express.png";

const skills = [
  {
    src: typescriptPng,
    alt: "TypeScript",
    name: "TypeScript",
    bg: "bg-blue-300",
  },
  { src: golangPng, alt: "Golang", name: "Golang", bg: "bg-blue-200" },
  {
    src: javascriptPng,
    alt: "JavaScript",
    name: "JavaScript",
    bg: "bg-yellow-200",
  },
  { src: reactPng, alt: "ReactJS", name: "ReactJS", bg: "bg-blue-100" },
  { src: mongodbPng, alt: "MongoDB", name: "MongoDB", bg: "bg-lime-300" },
  { src: sqlPng, alt: "SQL", name: "SQL", bg: "bg-sky-200" },
  { src: nodePng, alt: "NodeJS", name: "NodeJS", bg: "bg-lime-200" },
  { src: linuxPng, alt: "Linux", name: "Linux", bg: "bg-gray-300" },
  { src: pythonPng, alt: "Python", name: "Python", bg: "bg-yellow-200" },
  { src: expressPng, alt: "ExpressJS", name: "ExpressJS", bg: "bg-orange-200" },
  { src: nextPng, alt: "NextJS", name: "NextJS", bg: "bg-gray-100" },
];

export default function Skills() {
  return (
    <div id="skills" className="bg-orange-100 rounded-md py-5 px-5 mt-10 pb-10">
      <div className="text-2xl font-bold ml-4 mb-8">SKILLS</div>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        {skills.map(({ src, alt, name, bg }, index) => (
          <div
            key={index}
            className={`flex h-20 items-center justify-center text-center w-56 py-4 ${bg} text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]`}
          >
            <Image width={50} height={50} src={src} alt={alt} />
            <div className="ml-3">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
