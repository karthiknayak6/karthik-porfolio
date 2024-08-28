import React from "react";
import Image from "next/image";
import pcPng from "../../../public/coder.png";

export default function Introduction() {
  return (
    <div className=" bg-orange-300 rounded-md py-5 px-5 mt-10 pb-10 shadow-md bg-gradient-to-r from-red-300 to-red-300">
      <div className="text-xl font-bold ml-2 mb-4 py-2 px-4 bg-red-100 border-4 border-black shadow-[5px_5px_0_0_black] rounded-md inline-block">
        ABOUT ME
      </div>

      <div className="flex">
        <Image src={pcPng} alt="TypeScript" width={400} height={400} />
        <p className="px-7 text-lg text-slate-800">
          Hi, I'm Karthik Nayak, a dedicated web developer with a strong focus
          on building efficient and scalable applications. My journey in tech is
          driven by a passion for problem-solving and creating user-friendly
          experiences. I specialize in Golang and React, where I enjoy
          developing both the backend logic and the frontend interface.
          <br />
          <br /> I’m currently expanding my expertise in Next.js to build even
          more dynamic and responsive applications. I’m always on the lookout
          for new tools and techniques to refine my craft. Outside of coding, I
          enjoy exploring tech blogs and contributing to open-source projects.
          Let's connect and collaborate on something great!
        </p>
      </div>
    </div>
  );
}
