import Image from "next/image"

function Services() {
    return (
        <div className='bg-[#F9F9F9] p-6'>
            <div className='bg-white py-6'>
                <h1 className='font-semibold text-xl leading-normal text-[#151515] pb-5'>
                    Corporate Trainings
                </h1>
                <Image src="/images/Corporate.jpg" alt="Corporate" width={327} height={229} className="rounded-br-[23px] rounded-bl-[40px] rounded-tl-[30px] rounded-tr-3xl w-full" />
                <p className="text-[#696969] text-sm font-normal leading-normal pt-5">Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values. </p>
                <div className="flex flex-col gap-2 pt-5">
                    <span className="flex items-center text-[#696969] font-normal text-sm gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Leadership Training
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Strategic Planning and Implementation
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Project Management
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Sustainability Training
                    </span>
                    <span className="flex items-center text-[#696969] font-normal text-sm gap-3">
                        <Image src="/images/Zigzag.svg" alt="Zigzag" width={13} height={16} />
                        Customised Training
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Services