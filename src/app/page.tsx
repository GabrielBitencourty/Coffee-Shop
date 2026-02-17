'use client'

export default function Home() {
  return (
    <div className="flex p-4 font-cormorant items-center justify-evenly w-full h-screen">

      <div className="text-[#FEFEFE] md:text-2xl max-w-2xl flex flex-col items-start justify-center gap-8">

        <div>
          <p className="text-[#6F5B40]">#Coffe for hot days</p>
          <h1 className="font-dancing-script md:text-8xl text-7xl font-bold text-[#6D3B24]">Cold Brew</h1>
        </div>

        <p>Boots your productivity and build your energy levels, with a glass of cold brew coffee in the morning. Coffee has a simulating effect.</p>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#6F5B40] text-sm text-white rounded hover:bg-[#5A4732] transition-colors duration-300">Order Now</button>
          <h1 className="text-2xl font-bold">$14.99</h1>
          <p className="text-[#6F5B40]">Regular Price</p>
        </div>

      </div>

      <div className="hidden md:block">
         <img src="/assets/home.png" className="w-3xl object-contain" alt="a cold brew coffee" />
      </div>
    </div>
  );
}
