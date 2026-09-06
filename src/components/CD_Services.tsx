import Image from "next/image"

function CD_Services() {
    return (
        <div className='bg-white grid md:grid-cols-2 gap-6 lg:gap-10 md:px-8 lg:px-16 items-center lg:py-10'>
            <div>
                <h1 className='font-semibold text-xl md:text-3xl lg:text-[40px] leading-normal text-[#151515] pt-6 pb-5 md:pb-0'>
                    Capacity Development
                </h1>
                <Image src="/images/CD_Services.jpg" alt="CD_Services" width={327} height={229} className="rounded-b-lg rounded-tl-[33px] rounded-tr-lg w-full block md:hidden object-cover" />
                <p className="font-normal text-sm md:text-base lg:text-lg leading-normal text-[#696969] pt-5 md:pt-0">At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:</p>
                <div className="flex flex-col gap-2 pt-5 lg:pl-10">
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Tailored Training Programs
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Expert-Led Workshops
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Personalized Mentorship
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Technical Skills Enhancement
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Collaborative Learning Environment
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Ongoing Support and Resources
                    </span>
                </div>
            </div>
            <div className="relative w-full h-full min-h-95 hidden md:block">
                <Image src="/images/CD_Services.jpg" alt="CD_Services" sizes="(min-width:768px) 50vw, 100vw" fill className="rounded-br-[23px] rounded-bl-xl rounded-tl-[56px] rounded-tr-3xl w-full h-auto md:block hidden object-cover" />
            </div>
        </div>
    )
}

export default CD_Services