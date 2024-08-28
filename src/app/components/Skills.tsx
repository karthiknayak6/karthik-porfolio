import React from "react";
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
import Image from "next/image";

export default function Skills() {
  return (
    <div
      id="skills"
      className=" bg-orange-100   rounded-md py-5 px-5 mt-10 pb-10 "
    >
      <div className="text-2xl font-bold ml-4 mb-8">SKILLS</div>
      <div className="flex   items-center gap-20 px-10 ">
        <div className="flex h-20  items-center justify-center text-center w-56 py-4 bg-blue-300 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={typescriptPng} alt="TypeScript" />
          <div className="ml-3">TypeScript</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-blue-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={golangPng} alt="Golang" />
          <div className="ml-3">Golang</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-yellow-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={javascriptPng} alt="JavaScript" />
          <div className="ml-3">JavaScript</div>
        </div>
        <div className="flex h-20  items-center justify-center text-center w-56 py-4 bg-blue-100 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={reactPng} alt="ReactJS" />
          <div className="ml-3">ReactJS</div>
        </div>
      </div>
      <div className="flex h-20 items-center gap-20 mx-[12rem] mt-7">
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-lime-300 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={mongodbPng} alt="MongoDB" />
          <div className="ml-3">MongoDB</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-sky-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={sqlPng} alt="SQL" />
          <div className="ml-3">SQL</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-lime-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={nodePng} alt="ExpressJS" />
          <div className="ml-3">NodeJS</div>
        </div>
      </div>
      <div className="flex   items-center gap-20 px-10 mt-7">
        <div className="flex h-20  items-center justify-center text-center w-56 py-4 bg-gray-300 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={linuxPng} alt="TypeScript" />
          <div className="ml-3">Linux</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-yellow-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={pythonPng} alt="Golang" />
          <div className="ml-3">Python</div>
        </div>
        <div className="flex h-20 items-center justify-center text-center w-56 py-4 bg-orange-200 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={expressPng} alt="JavaScript" />
          <div className="ml-3">ExpressJS</div>
        </div>
        <div className="flex h-20  items-center justify-center text-center w-56 py-4 bg-gray-100 text-lg border-2 border-black rounded-md shadow-[4px_4px_0px_#000]">
          <Image width={50} height={50} src={nextPng} alt="ReactJS" />
          <div className="ml-3">NextJS</div>
        </div>
      </div>
    </div>
  );
}
