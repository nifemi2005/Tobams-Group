import { ArrowUpRight } from "lucide-react";
import Image from "next/image"

const skills = [
    'Strategic Career Guidance',
    'Leadership Development',
    'CV Development',
    'Sustainability Leadership',
    'Communication Skills',
    'Business Model',
];

function CEO() {
    return (
        <section className='bg-white p-6'>
            <div className='bg-[#EF435333] py-6 px-4 lg:p-10 rounded-2xl'>
                <h1 className='text-[#1671D9] text-sm md:text-xl font-semibold pb-2'>Learning With Our CEO:</h1>
                <h2 className='text-[#571244] text-xl md:text-[32px] font-semibold italic pb-3'>Transformation Hub With Jite Newton</h2>
                <p className='text-[#151515] font-normal text-sm md:text-lg leading-normal pb-4'>Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
                <Image src="/images/Learn_CEO.jpg" alt="Learn_CEO" width={0} height={0} sizes="100vw" className="w-full rounded-lg mb-8 block md:hidden" />
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div className="relative w-full h-full hidden md:block">
                        <Image src="/images/Learn_CEO.jpg" alt="Learn_CEO" sizes="(min-width:768px) 40vw, 100vw" fill className="rounded-2xl object-cover" />
                    </div>
                    <div className="bg-[#FFFFFF4D] rounded-2xl p-5 lg:py-8 lg:px-5 lg:p-6 h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skills.map((skill) => (
                                <div key={skill} className="bg-white rounded-xl p-4 flex items-center gap-2.5">
                                    <Image src="/images/Purple_Zigzag.svg" alt="Purple_Zigzag" width={14} height={18} className="shrink-0" />
                                    <span className="text-[#151515] font-medium text-xs lg:text-lg">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="bg-[#571244] text-white font-semibold text-sm flex items-center py-[10.5px] px-6 rounded-sm cursor-pointer hover:bg-[#460e36] transition-colors gap-2.5 w-fit mt-6">
                            <span>Learn More</span>
                            <ArrowUpRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CEO