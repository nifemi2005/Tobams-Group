'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: "Aisha Yusuf",
        role: "Founder, CraftHub NG",
        image: "/images/Aisha.png",
        quote: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
        id: 2,
        name: "John Davies",
        role: "Marketing Manager, E-Commerce Emporium",
        image: "/images/John.png",
        quote: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
        id: 3,
        name: "Chinonso Nwankwo",
        role: "HR Director, FutureTech Solutions",
        image: "/images/Chinoso.png",
        quote: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
    {
        id: 4,
        name: "David Adeleke",
        role: "CTO, NextGen Africa",
        image: "/images/David.jpg",
        quote: "The Corporate Training provided by Tobams Group significantly upskilled our teams. The facilitators were world-class and delivered impactful, practical value.",
    },
]

function Testimonial() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement
            const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 446
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className="bg-[#F9F9F9] py-12 lg:py-16">
            {/* Heading */}
            <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-[40px] text-[#151515] pb-10 lg:pb-14">
                Testimonials
            </h2>

            {/* Testimonials Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scroll-smooth px-6 lg:px-16 no-scrollbar pb-4"
            >
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl p-6 sm:p-7 lg:py-5 lg:px-6 border-l-2 border-[#EF4353] flex flex-col justify-between w-[calc(100vw_-_48px)] min-w-[calc(100vw_-_48px)] max-w-[calc(100vw_-_48px)] sm:w-[360px] sm:min-w-[360px] sm:max-w-[422px] lg:w-[422px] lg:min-w-[422px] shrink-0"
                    >
                        {/* Header: Avatar + Info */}
                        <div className="flex items-center gap-3.5">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={44}
                                height={44}
                                className="w-11 h-11 rounded-full object-cover shrink-0"
                            />
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base text-[#151515] leading-tight">
                                    {item.name}
                                </h3>
                                <p className="text-xs lg:text-sm text-[#696969] font-normal mt-1 leading-tight">
                                    {item.role}
                                </p>
                            </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-[#151515] text-sm sm:text-base leading-relaxed mt-4 sm:mt-5 font-normal">
                            {item.quote}
                        </p>
                    </div>
                ))}
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex justify-end items-center gap-2.5 px-6 lg:px-16 pt-5 sm:pt-6">
                <button
                    onClick={() => scroll('left')}
                    aria-label="Previous testimonial"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-[#EF43531A] text-[#EF4353] flex items-center justify-center hover:bg-[#EF4353] hover:text-white transition-colors cursor-pointer"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    aria-label="Next testimonial"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-[#EF43531A] text-[#EF4353] flex items-center justify-center hover:bg-[#EF4353] hover:text-white transition-colors cursor-pointer"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    )
}

export default Testimonial