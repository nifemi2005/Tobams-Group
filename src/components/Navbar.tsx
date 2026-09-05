'use client'
import { useState } from 'react'
import Image from 'next/image'
import { User, ChevronDown, X, Menu } from 'lucide-react'
import Link from 'next/link'

const navItems = [
    { name: 'About', href: '/about', hasDropdown: true, isActive: true },
    { name: 'What We Do', href: '/what-we-do', hasDropdown: true },
    { name: 'Jobs', href: '/jobs', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'TG Academy', href: '/tg-academy' },
    { name: 'Strategic Partnership', href: '/strategic-partnership' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Book a Consultation', href: '/book-consultation' },
]

const mobileNavItems = [
    { name: 'About', href: '/about', hasDropdown: true, isActive: true },
    { name: 'What We Do', href: '/what-we-do', hasDropdown: true },
    { name: 'Jobs', href: '/jobs', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'TG Academy', href: '/tg-academy' },
    { name: 'Strategic Partnership', href: '/strategic-partnership' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Book a Consultation', href: '/book-consultation' },
]


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='bg-[#F9F9F9]'>
            <div className='flex justify-between items-center px-6 pt-4.5 pb-4 md:px-10 md:py-5 lg:px-16 lg:py-6'>
                <Image src="/images/logo.png" alt="logo" width={123.85} height={42} />

                {/* mobile hamburger button / close button  */}
                <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden cursor-pointer'>
                    {isOpen ? <X className='w-8 h-8 text-white bg-[#151515] rounded-md' /> : <Menu className='w-8 h-8 text-white bg-[#151515] rounded-md py-1' />}
                </button>

                {/* desktop view */}
                <div className='hidden md:flex gap-2.5'>
                    <button className='cursor-pointer py-2 px-4 bg-[#571244] border border-[#571244] flex items-center gap-3 rounded-sm'>
                        <div className='w-8 h-8 rounded-full bg-[#E5D7E5] text-[#571244] flex items-center justify-center'>
                            <User />
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='text-white font-semibold text-lg'>Account</span>
                        </div>
                        <div className='w-5 h-5 rounded-full text-[#DDD0DA]'>
                            <ChevronDown />
                        </div>
                    </button>
                    <button className='cursor-pointer bg-[#EF4353] text-white rounded-sm py-[10.5px] px-5 font-semibold text-lg hover:bg-[#d93847] transition-colors'>
                        Take Assessment
                    </button>
                </div>
            </div>

            {/* Desktop Divider */}
            <div className='bg-[#F9F9F9] border-b border-[#DDD0DA]'></div>

            {/* below the nav */}
            <div className='hidden md:flex items-center justify-center gap-7 lg:gap-8 md:px-16 md:py-5'>
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className={`cursor-pointer flex items-center gap-1 lg:gap-2.5 transition-colors pb-1 lg:text-lg md:text-[11px] ${item.isActive
                        ? 'text-[#571244] font-semibold border-b-2 border-[#571244]'
                        : 'text-[#333333] hover:text-[#571244] font-medium'
                        }`}>  <span>{item.name}</span>
                        {item.hasDropdown && (
                            <ChevronDown className='text-[#571244] w-5 h-8' />
                        )}
                    </Link>
                ))}
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='md:hidden bg-[#160411] text-white px-6 py-8 flex flex-col gap-7 transition-all'>
                    {/* Navigation links */}
                    <div className='flex flex-col gap-6'>
                        {mobileNavItems.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className='flex items-center gap-2 text-white font-medium text-base hover:text-[#DDD0DA] transition-colors'>
                                {item.name}
                                {item.hasDropdown && <ChevronDown className='w-5 h-5 text-white' />}
                            </Link>
                        ))}
                    </div>
                    {/* Action buttons  */}
                    <div className='flex flex-col items-start gap-3.5 pt-4'>
                        <button className='cursor-pointer py-2 px-4 bg-[#571244] border border-[#571244] flex items-center gap-3 rounded-sm'>
                            <div className='w-8 h-8 rounded-full bg-[#E5D7E5] text-[#571244] flex items-center justify-center'>
                                <User />
                            </div>
                            <div className='flex items-center gap-1'>
                                <span className='text-white font-semibold text-lg'>Account</span>
                            </div>
                            <div className='w-5 h-5 text-[#DDD0DA]'>
                                <ChevronDown />
                            </div>
                        </button>
                        <button className='cursor-pointer bg-[#EF4353] text-white rounded-sm py-[10.5px] px-5 font-semibold text-lg hover:bg-[#d93847] transition-colors'>
                            Take Assessment
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar