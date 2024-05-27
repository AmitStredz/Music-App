import React from "react";

export default function NowPlaying() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3 bg-[#00000] h-auto p-2 w-3/12">
        <div className="w-[5vw] h-[5vw] bg-[#121212] rounded-lg flex justify-center items-center">
          <i className="ri-music-2-line text-2xl"></i>
        </div>
        <div>
          <div className="text-base font-semibold cursor-pointer hover:underline">
            <p>Main Rang Sharbaton Ka</p>
          </div>
          <div className="opacity-70 cursor-pointer hover:underline">
            <p className="text-[12px]">Atif Aslam, Chinmayi, Pritam</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <i className="ri-shuffle-line cursor-pointer"></i>
        <i className="ri-skip-left-line text-2xl cursor-pointer"></i>
        <i className="ri-play-circle-fill text-5xl cursor-pointer"></i>
        <i className="ri-skip-right-line text-2xl cursor-pointer"></i>
        <i className="ri-repeat-2-line cursor-pointer"></i>
      </div>
      <div className="flex items-center gap-3 w-3/12 justify-center">
        <i className="ri-play-list-2-line text-xl cursor-pointer"></i>
        <i className="ri-timeline-view text-xl cursor-pointer"></i>
        <i className="ri-volume-up-fill text-xl cursor-pointer"></i>
        <i className="ri-fullscreen-fill text-xl cursor-pointer"></i>
      </div>
    </div>
  );
}
