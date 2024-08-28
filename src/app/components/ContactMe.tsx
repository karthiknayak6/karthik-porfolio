import React from "react";

export default function ContactMe() {
  return (
    <div
      id="contact"
      className="rounded-md  w-full bg-red-300 shadow-md  flex-col mt-5"
    >
      <div className="text-xl font-bold ml-5 mt-5 mb-4 py-2 px-4 bg-red-100  border-4 border-black shadow-[5px_5px_0_0_black] rounded-md inline-block">
        CONTACT ME
      </div>
      <div className="flex flex-col ml-10 mt-6 mr-10">
        <div className="flex justify-evenly space-x-4 items-center">
          <input
            type="email"
            placeholder="Enter your first name"
            className="w-full h-12 text-xl bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
          />
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full h-12 text-xl bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
          />
        </div>
        <div className="flex justify-evenly space-x-4 items-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 text-xl bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000]"
          />
        </div>
        <textarea
          className="text-xl bg-light px-3 border-black border-2 rounded-md shadow-[3px_3px_0px_#000] mt-4 py-2"
          rows={5}
          cols={155}
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button className="w-32 h-12 mt-5 mb-5 bg-red-400 border-black border-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
          Submit
        </button>
      </div>
    </div>
  );
}
