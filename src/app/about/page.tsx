'use client'

export default function AboutPage() {
    return (
    <div className="flex p-4 font-cormorant items-center justify-evenly w-full h-screen">
        <div className="flex items-center">

            <div className="md:block hidden">
                <img src="/assets/about.png" alt="About Us Image" />
            </div>

            <div className="p-4 flex flex-col gap-4">
                <h1 className="text-4xl font-bold font-dancing-script text-[#6D3B24]">A little about us</h1>
                
                <div>
                    <h1 className="text-2xl font-bold text-[#6F5B40]">Our Story</h1>
                    <ul className="list-disc list-inside text-[#FEFEFE]">
                        <li>Founded in 2020, our coffee shop was born out of a love for great coffee and a desire to create a space where people can connect and unwind. We started as a small local café and have since grown into a beloved community hub.</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-[#6F5B40]">Our Mission</h1>
                    <ul className="list-disc list-inside text-[#FEFEFE]">
                        <li>Our mission is to offer high-quality coffees, prepared with care, creating a welcoming environment where people can slow down and enjoy the moment.</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-[#6F5B40]">Our Values</h1>
                    <ul className="list-disc list-inside text-[#FEFEFE]">
                        <li>Quality: We are committed to sourcing the best beans and crafting exceptional coffee.</li>
                        <li>Community: We strive to create a warm and inclusive space for everyone.</li>
                        <li>Sustainability: We prioritize ethical sourcing and environmentally friendly practices.</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-[#6F5B40]">What makes our coffee special?</h1>
                    <ul className="list-disc list-inside text-[#FEFEFE]">
                        <li>We source our beans from sustainable farms around the world, ensuring quality and ethical practices.</li>
                        <li>Our baristas are trained to craft each cup with precision, bringing out the unique flavors of each coffee.</li>
                        <li>We offer a variety of brewing methods, allowing you to experience coffee in different ways.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    )
}