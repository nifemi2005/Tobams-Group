import Image from "next/image"

function PIT_Service() {
    return (
        <div className='bg-white grid md:grid-cols-2 gap-6 lg:gap-10 md:px-8 lg:px-16 items-center lg:pt-10'>
            {/* PIT service Desktop */}
            <div className="relative w-full h-full min-h-95 hidden md:block">
                <Image src="/images/PIT.jpg" alt="Corporate" sizes="(min-width:768px) 50vw, 100vw" fill className="rounded-br-[23px] rounded-bl-xl rounded-tl-[56px] rounded-tr-3xl w-full h-auto md:block hidden object-cover" />
            </div>
            <div>
                <p className="font-semibold text-xl md:text-3xl lg:text-[40px] leading-normal text-[#151515] pb-5 md:pb-0">Personalised Individual Training</p>
                <Image src="/images/PIT.jpg" alt="PIT" width={327} height={229} className="rounded-b-lg rounded-tl-[33px] rounded-tr-lg w-full block md:hidden object-cover" />
                <p className="font-normal text-sm md:text-base lg:text-lg leading-normal text-[#696969] pt-5 md:pt-0">Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.</p>
                <div className="flex flex-col gap-2 pt-5 lg:pl-10">
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Leadership Development
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Soft Skills Development
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Industry Specific Knowledge
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Technical Skills Enhancement
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Time Management and Productivity
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Career Development
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PIT_Service