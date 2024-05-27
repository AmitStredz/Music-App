import React from "react";
import Navbar from "./navbar";
export default function centre() {
  return (
    <div className="bg-gradient-to-b from-[#690808] to-[#998585] w-full h-full rounded-lg">
      <section>
        <Navbar /> 
      </section>

      <section>
        <div className="flex gap-3 items-center mt-9 ml-10 max-lg:ml-5 max-md:ml-2">
          <div className="w-[12vw] h-[12vw] flex items-center justify-center bg-blue-400 rounded-md">
            <i className="ri-heart-fill text-[5vw]"></i>
          </div>
          <div className="flex flex-col gap-3 max-md:gap-0 ">
            <p>Playlist</p>
            <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              Liked Songs
            </span>
            <p>
              <span className="hover:underline cursor-pointer">AmitStredz</span>{" "}
              .100 songs
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <div className="bg-green-500 rounded-[50%] px-4 p-3 cursor-pointer hover:scale-105">
            <i className="ri-play-fill text-black text-3xl"></i>
          </div>
          <div className="flex gap-1 opacity-70 cursor-pointer hover:scale-105">
            <a>List</a>
            <i className="ri-list-unordered"></i>
          </div>
        </div>
      </section>
    </div>
  );
}
