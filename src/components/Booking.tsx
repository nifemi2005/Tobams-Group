import React from 'react'

function Booking() {
    return (
        <div className='bg-[#F9F9F9] py-8 px-6'>
            <div className='lg:w-[80%] lg:mx-auto'>
                <div className='bg-[#571244] rounded-lg py-8 px-16 flex flex-col justify-center items-center'>
                    <p className='text-[#FFFFFF] font-semibold text-xl text-center pb-7 md:w-[756px] hidden md:block md:px-5 lg:px-0'>Want to accelerate professional growth and development at your organisation? See how we can help.</p>
                    <p className='text-[#FFFFFF] font-semibold text-xl text-center pb-7 md:w-[756px] block md:hidden'>Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.</p>
                    <button className='bg-white rounded-sm py-3 px-6 text-[#571244] leading-normal font-semibold text-sm md:text-lg cursor-pointer'>Book a Consultation</button>
                </div>
            </div>
        </div>
    )
}

export default Booking