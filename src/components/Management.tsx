import Image from "next/image"

function Management() {
    return (
        <div className='bg-[#F9F9F9] px-6 lg:p-16'>
            <div className='bg-[#2C0922] rounded-lg md:rounded-[20px] py-4 px-5 md:p-10 grid md:grid-cols-2 gap-10'>
                <div className="relative w-full h-full hidden md:block">
                    <Image src="/images/Management.jpg" alt="Management" sizes="(min-width:768px) 50vw, 100vw" width={0} height={0} fill className="rounded-t-lg rounded-bl-lg pb-4 w-full h-auto object-cover md:block hidden" />
                </div>
                <div>
                    <h1 className='text-white text-base font-semibold leading-normal pb-3 text-center md:text-start md:text-2xl lg:text-[40px]'>Management Development Program</h1>
                    <Image src="/images/Management.jpg" alt="Management" width={250} height={100} className="rounded-t-lg rounded-bl-lg pb-4 w-full block md:hidden" />
                    <p className="text-white text-sm md:text-base font-normal leading-normal">Tobams Group offers a comprehensive Management
                        Development Program designed to equip corporate
                        organisations with the high
                        -performing leaders they need to
                        thrive.
                    </p>
                    <br />
                    <p className="text-white md:text-base text-sm font-normal leading-normal pb-5">Our program includes workshops, seminars, coaching
                        sessions, online courses, and experiential learning
                        opportunities designed to improve leadership, strategic
                        thinking, communication, and other essential managerial
                        competencies for corporate organisations.
                    </p>
                    <div className="py-2 flex flex-col gap-6    ">
                        <span className="bg-[#8F6182] flex items-center gap-4 text-white font-normal text-sm leading-normal py-2 px-2 rounded-lg">
                            <Image src="/images/White_Zigzag.svg" alt="White_Zigzag" width={18.67} height={24} className="pl-2" />
                            Enhanced Leadership Skills
                        </span>
                        <span className="bg-[#8F6182] flex items-center gap-4 text-white font-normal text-sm leading-normal py-2 px-2 rounded-lg">
                            <Image src="/images/White_Zigzag.svg" alt="White_Zigzag" width={18.67} height={24} className="pl-2" />
                            Improved Employee Engagement
                        </span>
                        <span className="bg-[#8F6182] flex items-center gap-4 text-white font-normal text-sm leading-normal py-2 px-2 rounded-lg">
                            <Image src="/images/White_Zigzag.svg" alt="White_Zigzag" width={18.67} height={24} className="pl-2" />
                            Stronger Organisational Culture
                        </span>
                        <span className="bg-[#8F6182] flex items-center gap-4 text-white font-normal text-sm leading-normal py-2 px-2 rounded-lg">
                            <Image src="/images/White_Zigzag.svg" alt="White_Zigzag" width={18.67} height={24} className="pl-2" />
                            Sustainable Growth
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Management