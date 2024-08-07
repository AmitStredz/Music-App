
export default function navbar() {
  return (
    <div>
      <nav className="flex justify-between p-3 bg-transparent">
        <div className="flex gap-2">
          <i className="ri-arrow-left-s-line rounded-[50%] bg-[#321816] px-1 text-3xl cursor-pointer"></i>
          <i className="ri-arrow-right-s-line rounded-[50%] bg-[#321816] px-1 text-3xl cursor-pointer"></i>
        </div>

        <div className="flex gap-3 font-semibold">
          <div className="rounded-2xl max-lg:hidden bg-white text-black p-1 px-3 cursor-pointer hover:scale-105">
            <a>Explore Premium</a>
          </div>
          <div className="flex gap-1 max-md:hidden bg-[#4C2320] rounded-2xl p-1 px-3 cursor-pointer hover:scale-105">
            <i className="ri-arrow-down-circle-line"></i>
            <a>Install App</a>
          </div>
          <i className="ri-notification-3-line bg-[#4C2320] rounded-[50%] px-3 flex items-center cursor-pointer hover:scale-105"></i>
          <a className="bg-orange-500 rounded-[50%] px-3 text-lg flex items-center text-[#321816] cursor-pointer hover:scale-105">A</a>
        </div>
      </nav>
    </div>
  );
}
