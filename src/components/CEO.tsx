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
        <div className='bg-white p-6'>
            <div className='bg-[#EF435333] py-6 px-4'>
                <h1 className='text-[#1671D9] text-sm font-semibold pb-2'>Learning With Our CEO:</h1>
                <h2 className='text-[#571244] text-xl font-semibold italic pb-3'>Transformation Hub With Jite Newton</h2>
                <p className='text-[#151515] font-normal text-sm leading-normal pb-4'>Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
                <Image src="/images/Learn_CEO.jpg" alt="Learn_CEO" width={0} height={0} sizes="100vw" className="w-full rounded-lg mb-8" />
                <div className="bg-[#FFFFFF4D] rounded-lg p-5 flex flex-col gap-3">
                    {skills.map((skill) => (
                        <div className="bg-[#FFFFFF] rounded-xl p-4">
                            <span className="flex items-center gap-3 text-[#151515] font-normal text-sm">
                                <Image src="/images/Purple_Zigzag.svg" alt="Purple_Zigzag" width={14} height={18} />
                                {skill}
                            </span>
                        </div>
                    ))}
                    <button className="bg-[#571244] text-white font-semibold text-sm flex items-center py-[10.5px] px-6 rounded-sm cursor-pointer hover:bg-[#460e36] transition-colors gap-3 w-fit mt-4">Learn More <ArrowUpRight size={24} /></button>
                </div>
            </div>
        </div>
    )
}

export default CEO