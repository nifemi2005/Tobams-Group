import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function ConsultantSection() {
    return (
        <section className='bg-[#F9F9F9] pt-8'>
            <div className='bg-[#5712441A] p-6 lg:py-12 lg:px-16'>
                <h1 className='text-[#571244] text-2xl lg:text-[40px] font-semibold'>Training The Consultant</h1>
                <h2 className='text-[#571244] text-base md:text-xl font-semibold leading-normal py-5'>Maximize Your Potential as a Certified Trainer:</h2>
                <p className='font-normal text-sm md:text-xl text-[#151515] leading-normal pb-5'>With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.</p>
                <div className='bg-[#571244] p-6 text-white rounded-lg grid md:grid-cols-2 lg:gap-x-5 lg:gap-y-2'>
                    <div>
                        <h2 className='font-bold text-base leading-normal'>Expert-Led Learning</h2>
                        <p className='text-sm font-normal leading-normal py-5'>Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-base leading-normal'>Comprehensive Curriculum</h2>
                        <p className='text-sm font-normal leading-normal py-5'>Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-base leading-normal'>Interactive Workshops</h2>
                        <p className='text-sm font-normal leading-normal py-5'>Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-base leading-normal'>Global Recognition</h2>
                        <p className='text-sm font-normal leading-normal pt-5'>You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.</p>
                    </div>
                </div>
                <button className='cursor-pointer rounded-lg py-3 px-6 bg-[#571244] text-white font-semibold text-sm leading-normal mt-7 flex gap-3 items-center'>Learn More <ArrowUpRight className='w-6 h-6' /> </button>
            </div>
        </section>
    )
}

export default ConsultantSection