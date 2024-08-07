import LibraryList from "./LibraryList";

export default function Library() {
  return (
    <>
      <div className="mt-6">
        <div className=" bg-[#121212] text-xl rounded-lg p-5 flex flex-col gap-3 ">
          <div className="flex  justify-between ">
            <div className="flex gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-[0.9s]">
              <i className="ri-bookmark-line"></i>
              <h2 className="font-bold max-lg:hidden">Your Library</h2>
            </div>
            <div className="flex gap-2 max-sm:hidden">
              <i className="ri-add-line cursor-pointer opacity-60 hover:opacity-100 transition-[0.9s]"></i>
              <i className="ri-arrow-right-line cursor-pointer opacity-60 hover:opacity-100 transition-[0.9s]"></i>
            </div>
          </div>

          <div className="flex gap-3 max-lg:hidden object-contain">
            <a className="bg-[#2A2A2A] rounded-3xl text-[.8vw] font-semibold  px-3 content-center cursor-pointer">
              Playlists
            </a>
            <a className="bg-[#2A2A2A] rounded-3xl text-[1vw] font-semibold  px-4 content-center cursor-pointer">
              Artists
            </a>
            <a className="bg-[#2A2A2A] rounded-3xl text-[1vw] font-semibold p-[1px] px-4 content-center cursor-pointer">
              Albums
            </a>
          </div>

          <div className="flex justify-between max-md:hidden">
            <div className="bg-[#121212] rounded-[50%] hover:bg-[#2d2c2c] px-2  transition-[0.9s] cursor-pointer">
              <i className="ri-search-line opacity-60 text-[1.2rem]"></i>
            </div>
            <div className="flex gap-1 opacity-60 cursor-pointer hover:scale-105  transition-[1s]">
              <h5 className="opacity-60 text-base">Recents</h5>
              <i className="ri-list-unordered"></i>
            </div>
          </div>
          <div className="h-[46vh] ">
            <LibraryList />
          </div>
        </div>
      </div>
    </>
  );
}
