import Image from "next/image"
import { FaLinkedinIn, FaXTwitter, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { FaInstagram } from "react-icons/fa"

const WhatWeDoLinks = [
    { name: "Sustainability Services" },
    { name: "Strategy Planning and Implementation" },
    { name: "Tech Talent Solutions" },
    { name: "Training and Development" },
    { name: "IT Consulting Services" },
    { name: "Social Impact" },
]

const CompanyLinks = [
    { name: "About" },
    { name: "Jobs" },
    { name: "Projects" },
    { name: "Our Founder" },
    { name: "Business Model" },
    { name: "The Team" },
    { name: "Contact Us" },
    { name: "Blog" },
    { name: "FAQs" },
    { name: "Testimonials" },
]

const SolutionLinks = [
    { name: "Tobams Group Academy" },
    { name: "Help a Tech Talent" },
    { name: "Campus Ambassadors Program" },
    { name: "Join Our Platform" },
    { name: "Pricing" },
    { name: "Book a Consultation" },
    { name: "Join Our Slack Community" },
]

function Footer() {
    return (
        <footer className='bg-[#11040E] p-6 lg:py-8 lg:px-16'>
            <div className="md:flex justify-between gap-5 lg:gap-0">
                <div>
                    <Image src="/images/Footer_Logo.png" alt="logo" width={123.85} height={42} />
                    <p className="text-[#F8F8F8] font-normal text-sm lg:text-base leading-normal pb-6 md:w-[300px] lg:w-[360px]">
                        Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
                    </p>
                    <div className="flex items-center gap-5">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#151515] hover:opacity-85 transition-opacity"
                        >
                            <FaLinkedinIn size={15} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#151515] hover:opacity-85 transition-opacity"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X (Twitter)"
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#151515] hover:opacity-85 transition-opacity"
                        >
                            <FaXTwitter size={14} />
                        </a>
                    </div>
                </div>

                <div className="pb-5 md:pb-0 pt-5 md:pt-0">
                    <p className="font-bold text-lg md:text-sm lg:text-xl leading-normal text-white pb-4">What We Do</p>
                    <div className="flex flex-col text-white gap-3 text-sm md:text-xs lg:text-base font-normal">
                        {WhatWeDoLinks.map((whatwedo) => (
                            <a href="#" key={whatwedo.name} className="cursor-pointer hover:text-gray-300 transition-colors">
                                {whatwedo.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pb-5 md:pb-0">
                    <p className="font-bold text-lg md:text-sm lg:text-xl leading-normal text-white pb-4">Company</p>
                    <div className="flex flex-col text-white gap-3 text-sm md:text-xs lg:text-base font-normal">
                        {CompanyLinks.map((company) => (
                            <a href="#" key={company.name} className="cursor-pointer hover:text-gray-300 transition-colors">
                                {company.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pb-5 md:pb-0">
                    <p className="font-bold text-lg md:text-sm lg:text-xl leading-normal text-white pb-4">Solution</p>
                    <div className="flex flex-col text-white gap-3 text-sm md:text-xs lg:text-base font-normal">
                        {SolutionLinks.map((solution) => (
                            <a href="#" key={solution.name} className="cursor-pointer hover:text-gray-300 transition-colors">
                                {solution.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='block md:hidden bg-[#DDD0DA] border-b border-[#DDD0DA] my-6'></div>

            <div className="bg-[#FFFFFF0F] p-4 lg:p-6 mt-5 lg:mt-10 mb-8 rounded-lg md:flex md:flex-row-reverse items-center justify-between">
                <div className="lg:border-l border-white/10 lg:pl-6">
                    <h2 className="font-bold text-lg text-white leading-normal pb-2.5">Contact Information</h2>
                    <div className="text-white flex flex-col gap-2.5 pb-6 md:pb-0">
                        <a href="mailto:theteam@tobamsgroup.com" className="text-sm font-normal leading-normal flex items-center gap-2.5 hover:underline">
                            <FaEnvelope className="text-[#EF4353]" size={16} />
                            <span>theteam@tobamsgroup.com</span>
                        </a>
                        <a href="tel:+447886600748" className="text-sm font-normal leading-normal flex items-center gap-2.5 hover:underline">
                            <FaPhone className="text-[#EF4353]" size={15} />
                            <span>+447886600748</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-white leading-normal pb-2.5">Registered Offices</h2>
                    <div className="flex flex-col lg:divide-x divide-white/10 lg:flex-row gap-10">
                        <p className="text-white text-sm lg:text-base font-normal leading-normal lg:pr-6">
                            <span className="text-[#EF4353]">United Kingdom</span> <br />
                            07451196 (Registered by Company House) <br className="hidden lg:block" />
                            Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                        </p>
                        <p className="text-white text-sm lg:text-base font-normal leading-normal lg:pr-6">
                            <span className="text-[#EF4353]">Nigeria</span> <br />
                            RC 1048722 (Registered by the Corporate Affairs Commission) <br className="hidden lg:block" />
                            4, Muaz Close, Angwari-Rimi
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#DDD0DA] border-b border-[#DDD0DA]'></div>

            <div className="pt-6 pb-2 flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-4">
                <p className="text-white font-light text-sm lg:text-base">
                    Copyright &copy; Tobams Group, 2024. All rights reserved.
                </p>

                <div className="flex md:flex-row-reverse flex-wrap justify-center items-center gap-6 lg:gap-8 text-sm lg:text-base text-white font-light">
                    <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
                        <a href="#" className="underline cursor-pointer hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="underline cursor-pointer hover:text-gray-300 transition-colors">Cookies Policy</a>
                    </div>
                    <div>
                        <a href="#" className="underline cursor-pointer hover:text-gray-300 transition-colors">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer