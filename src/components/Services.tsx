import Image from "next/image"

function Services() {
    return (
        <div className='bg-[#F9F9F9] p-6 md:p-0 md:pt-8'>
            <div className='bg-white py-6 grid grid-cols-2 items-center md:px-16'>
                <div>
                    <h1 className='font-semibold text-xl md:text-[40px] leading-normal text-[#151515] pb-5 md:pb-0'>
                        Corporate Trainings
                    </h1>
                    <Image src="/images/Corporate.jpg" alt="Corporate" width={327} height={229} className="rounded-br-[23px] rounded-bl-[40px] rounded-tl-[30px] rounded-tr-3xl w-full block md:hidden" />
                    <p className="text-[#696969] text-sm md:text-lg font-normal leading-normal pt-5 md:pt-0 md:max-w-[646px]">Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values. </p>
                    <div className="flex flex-col gap-2 pt-5 md:pl-10">
                        <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                            <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                            Leadership Training
                        </span>
                        <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                            <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                            Strategic Planning and Implementation
                        </span>
                        <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                            <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                            Project Management
                        </span>
                        <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                            <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                            Sustainability Training
                        </span>
                        <span className="flex items-center text-[#696969] font-normal text-sm md:text-lg gap-3">
                            <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                            Customised Training
                        </span>
                    </div>
                </div>
                <div>
                    <Image src="/images/Corporate.jpg" alt="Corporate" width={602} height={346} className="rounded-br-[23px] rounded-bl-xl rounded-tl-[56px] rounded-tr-3xl w-full max-w-162.5 md:block hidden" />
                </div>
            </div>
        </div>
    )
}

export default Services