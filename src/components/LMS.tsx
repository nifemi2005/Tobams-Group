import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

function LMS() {
    return (
        <section className='mt-5 md:mt-7'>

            {/* mobile view  */}
            <div className="flex lg:hidden flex-col justify-center items-center bg-[#5712441A] px-6">
                <h1 className='text-[#571244] text-xl font-semibold leading-normal py-6'>Learning Management System</h1>
                <div className="w-full max-w-81.75 aspect-square rounded-full overflow-hidden">
                    <Image src="/images/LMS.jpg" alt="LMS Image" width={327} height={327} className="w-full h-full object-cover" priority />
                </div>
                <div className="bg-[#5712441A] p-6 rounded-lg mt-6">
                    <p className="text-[#151515] font-normal leading-normal text-sm">TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.</p>
                    <h3 className="text-[#571244] font-bold text-base leading-normal pb-3 pt-5">Some of our courses include:</h3>
                    <ul className="text-[#151515] font-normal text-sm leading-normal flex flex-col gap-3 list-disc pl-5">
                        <li>Business Analysis</li>
                        <li>Design Thinking</li>
                        <li>Effective Communication</li>
                        <li>Entrepreneurship</li>
                        <li>Career Development</li>
                        <li>Business Model</li>
                    </ul>
                    <button className="flex items-center gap-2 py-[10.5px] px-6 text-white bg-[#571244] font-semibold text-sm leading-normal mt-6 rounded-sm cursor-pointer">Learn More <ArrowUpRight className="w-6 h-6" /></button>
                </div>
            </div>

            {/* desktop view  */}
            <div className="bg-[#5712441A] lg:grid grid-cols-2 hidden items-center justify-between py-12 px-16">
                <div className="w-[556.88px] h-142 rounded-full overflow-hidden">
                    <Image src="/images/LMS.jpg" alt="LMS Image" width={556.88} height={568} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className='text-[#571244] text-[40px] font-semibold leading-normal pb-3'>Learning Management System</h1>
                    <div className="bg-[#5712441A] p-6 rounded-lg">
                        <p className="text-[#151515] font-normal leading-normal text-base">TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.</p>
                        <h3 className="text-[#571244] font-bold text-lg leading-normal pb-3 pt-5">Some of our courses include:</h3>
                        <ul className="grid grid-cols-3 gap-y-4 list-disc text-[#151515] font-normal text-base leading-normal pl-5">
                            <li>Business Analysis</li>
                            <li>Design Thinking</li>
                            <li>Effective Communication</li>
                            <li>Entrepreneurship</li>
                            <li>Career Development</li>
                            <li>Business Model</li>
                        </ul>
                    </div>
                    <button className="flex items-center gap-2 py-[10.5px] px-6 text-white bg-[#571244] font-semibold text-base leading-normal mt-7 rounded-sm cursor-pointer">Learn More <ArrowUpRight className="w-6 h-6" /></button>
                </div>
            </div>
        </section>
    )
}

export default LMS