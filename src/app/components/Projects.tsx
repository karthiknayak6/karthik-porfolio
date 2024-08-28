import React from "react";
import Image from "next/image";
import typescriptPng from "../../../public/typescript.png";
import golangPng from "../../../public/golang.png";
import javascriptPng from "../../../public/javascript.png";
import reactPng from "../../../public/react.png";
import sqlPng from "../../../public/sql.png";
import nodePng from "../../../public/node.png";
import mongodbPng from "../../../public/mongodb.png";
import githubPng from "../../../public/github.png";
import redisPng from "../../../public/redis.png";
import expressPng from "../../../public/express.png";
import codingPlatformImg from "../../../public/codingplatform.jpeg";
import petAppImg from "../../../public/petapp.jpeg";
import pollAppImg from "../../../public/pollapp.png";
import urlShortnerImg from "../../../public/shortio.png";
export default function Projects() {
  return (
    <div
      id="projects"
      className=" bg-orange-100 rounded-md py-5 px-5 mt-5 pb-10  space-y-6"
    >
      <div className="text-2xl font-bold ml-4 mb-4">PROJECTS</div>
      <div className="flex justify-between h-64 bg-red-200 border-t-k2  border-black rounded-md shadow-[4px_4px_0px_#000] ">
        <div className="w-[45rem] h-64 bg-red-400 rounded-l-md border-black shadow-[0px_0px_0px_#000]">
          <Image
            src={codingPlatformImg}
            alt="Coding Platform"
            className="w-full h-full object-cover rounded-l-md"
          />
        </div>

        <div className="h-64 w-full">
          <div className="flex justify-between mr-10">
            <h1 className="text-2xl p-3 font-sans">
              Adaptive Coding Platform{" "}
            </h1>
            <a
              href="https://github.com/karthiknayak6/adaptive-coding-app"
              className="flex items-center cursor-pointer"
            >
              <Image src={githubPng} alt="github" width={35} height={35} />
              <div className="ml-1">GitHub</div>
            </a>
          </div>
          <div className="flex space-x-3">
            <div className="flex text-center  items-center pl-3">
              <Image
                width={30}
                height={30}
                src={typescriptPng}
                alt="TypeScript"
              />
              <div className="ml-1">TypeScript</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={30} height={30} src={reactPng} alt="TypeScript" />
              <div className="ml-1">ReactJS</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={30} height={30} src={golangPng} alt="TypeScript" />
              <div className="ml-1">Golang</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={30} height={30} src={mongodbPng} alt="TypeScript" />
              <div className="ml-1">MongoDB</div>
            </div>
          </div>
          <p className="p-3">
            Adaptive Coding Platform is an ML-based web application that helps
            developers improve their coding skills through algorithmic
            challenges. Built with ReactJS and Golang, the platform features a
            code editor, real-time feedback, and progress tracking. It uses
            Docker containers for secure and isolated code execution. The
            platform leverages K-means clustering to suggest problems tailored
            to a user's learning speed, providing a personalized and effective
            learning experience for developers at all skill levels
          </p>
        </div>
      </div>

      <div className="flex justify-between h-64 bg-red-100 border-t-k2  border-black rounded-md shadow-[4px_4px_0px_#000] ">
        <div className="w-[45rem] h-64 bg-red-400 rounded-l-md border-black shadow-[0px_0px_0px_#000]">
          <Image
            src={pollAppImg}
            alt="Coding Platform"
            className="w-full h-full object-cover rounded-l-md"
          />
        </div>{" "}
        <div className="h-64 w-full">
          <div className="flex justify-between mr-10">
            <h1 className="text-2xl p-3 font-sans">
              Real-time Polling Application{" "}
            </h1>
            <a
              href="https://github.com/karthiknayak6/pollapp"
              className="flex items-center cursor-pointer"
            >
              <Image src={githubPng} alt="github" width={35} height={35} />
              <div className="ml-1">GitHub</div>
            </a>
          </div>
          <div className="flex space-x-3">
            <div className="flex text-center  items-center pl-3">
              <Image
                width={30}
                height={30}
                src={typescriptPng}
                alt="TypeScript"
              />
              <div className="ml-1">TypeScript</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={30} height={30} src={reactPng} alt="TypeScript" />
              <div className="ml-1">ReactJS</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={20} height={20} src={nodePng} alt="TypeScript" />
              <div className="ml-1">NodeJS</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={30} height={30} src={mongodbPng} alt="TypeScript" />
              <div className="ml-1">MongoDB</div>
            </div>
          </div>
          <p className="p-3">
            The Real-time Polling Application was developed using ReactJS,
            NodeJS, TypeScript, and MongoDB. This project allows users to create
            and share polls, enabling real-time voting with immediate results
            updates. The use of WebSockets ensures that the voting process is
            interactive, with results being displayed instantly as users cast
            their votes.
          </p>
        </div>
      </div>
      <div className="flex justify-between  h-64 bg-red-200 border-t-k2  border-black rounded-md shadow-[4px_4px_0px_#000] ">
        <div className="w-[45rem] h-64 bg-red-400 rounded-l-md border-black shadow-[0px_0px_0px_#000]">
          <Image
            src={petAppImg}
            alt="Coding Platform"
            className="w-full h-full object-cover rounded-l-md"
          />
        </div>{" "}
        <div className="h-64 w-full">
          <div className="flex justify-between mr-10">
            <h1 className="text-2xl p-3 font-sans">
              Pet Adoption Application{" "}
            </h1>
            <a
              href="https://github.com/karthiknayak6/pawmigo-pet-adoption-app"
              className="flex items-center cursor-pointer"
            >
              <Image src={githubPng} alt="github" width={35} height={35} />
              <div className="ml-1">GitHub</div>
            </a>
          </div>
          <div className="flex space-x-3">
            <div className="flex text-center  items-center pl-3">
              <Image
                width={30}
                height={30}
                src={typescriptPng}
                alt="TypeScript"
              />
              <div className="ml-1">TypeScript</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={20} height={20} src={nodePng} alt="TypeScript" />
              <div className="ml-1">NodeJS</div>
            </div>
            <div className="flex text-center items-center">
              <Image width={20} height={20} src={expressPng} alt="TypeScript" />
              <div className="ml-1">expressJS</div>
            </div>

            <div className="flex text-center items-center">
              <Image width={20} height={20} src={sqlPng} alt="TypeScript" />
              <div className="ml-1">mysql</div>
            </div>
          </div>
          <p className="p-3">
            The Pet Adoption Web Application was built with a stack including
            TailwindCSS, Node.js, Express.js, TypeScript, EJS, and MySQL. This
            application streamlines the adoption process by offering a
            user-friendly interface for both users and organizations. It
            features an exclusive admin dashboard for managing adoption
            requests, and detailed pet profiles, including images and care
            requirements, to help users make informed decisions. The platform
            also tracks adoption history, ensuring a smooth experience for all
            parties involved.
          </p>
        </div>
      </div>
      <div className="flex justify-between h-64 bg-red-100 border-t-k2  border-black rounded-md shadow-[4px_4px_0px_#000] ">
        <div className="w-[45rem] h-64 bg-red-400 rounded-l-md border-black shadow-[0px_0px_0px_#000]">
          <Image
            src={urlShortnerImg}
            alt="Coding Platform"
            className="w-full h-full object-cover rounded-l-md"
          />
        </div>{" "}
        <div className="h-64 w-full">
          <div className="flex justify-between mr-10">
            <h1 className="text-2xl p-3 font-sans">
              URL Shortener Application{" "}
            </h1>
            <a
              href="https://github.com/karthiknayak6/url_shortner"
              className="flex items-center cursor-pointer"
            >
              <Image src={githubPng} alt="github" width={35} height={35} />
              <div className="ml-1">GitHub</div>
            </a>
          </div>
          <div className="flex space-x-3">
            <div className="ml-4 flex text-center items-center">
              <Image width={30} height={30} src={golangPng} alt="TypeScript" />
              <div className="ml-1">Golang</div>
            </div>
            <div className=" ml-1 flex text-center items-center">
              <Image width={20} height={20} src={redisPng} alt="TypeScript" />
              <div className="ml-1">Redis</div>
            </div>
          </div>
          <p className="p-3">
            The URL Shortener Application was developed using Golang and Redis,
            focusing on efficiency and security. This application allows users
            to shorten URLs and monitor their usage.
            <br /> With rate limiting implemented, the platform ensures
            optimized performance while safeguarding against abuse.
          </p>
        </div>
      </div>
    </div>
  );
}
