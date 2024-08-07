export default function Home() {
  return (
    <div className='flex flex-col text-white  bg-[#121212] text-2xl rounded-lg p-5 '>
        <div className='p-1'>
            <i className="ri-home-5-line opacity-60 hover:opacity-100 cursor-pointer transition-[0.9s] "><span className='max-md:hidden ml-3 text-xl font-homeFont hover:underline'>Home</span></i>
        </div>
        <div className='p-1'>
            <i className="ri-search-line opacity-60 hover:opacity-100 cursor-pointer transition-[0.9s]"><span className='max-md:hidden ml-3 text-xl font-homeFont hover:underline'>Search</span></i>
        </div>
    </div>
  ) 
}
