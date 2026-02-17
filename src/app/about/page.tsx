'use client'

export default function AboutPage() {
    return (
    <div className="flex p-4 font-cormorant items-center justify-evenly w-full h-screen">
        <div className=" bg-[#6F5B40] w-5xl flex items-center">

            <div className="md:block hidden">
                <img src="/assets/about.jpg" className="h-150 w-460 object-cover" alt="About Us Image" />
            </div>

            <div className="p-4 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-[#FEFEFE]">About Us</h1>
                <p>Welcome to our coffee haven! We are passionate about crafting the perfect cup of coffee for you. Our journey began with a simple love for coffee and a desire to share that love with others. We source our beans from the finest coffee-growing regions around the world, ensuring that every sip is a delightful experience.</p>
            </div>

        </div>
    </div>
    )
}