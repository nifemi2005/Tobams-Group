import Image from "next/image"
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
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
        <div className='bg-[#11040E] p-6'>
            <Image src="/images/Footer_Logo.png" alt="logo" width={123.85} height={42} />
            <p className="text-[#F8F8F8] font-normal text-sm leading-normal">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
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
            <div className="flex flex-col gap-5 pt-5 pb-3">
                <div>
                    <p className="font-bold text-lg leading-normal text-white pb-4">What We Do</p>
                    <div className="flex flex-col text-white gap-3 text-sm font-normal">
                        {WhatWeDoLinks.map((whatwedo) => (
                            <a href="#" key={whatwedo.name} className="cursor-pointer hover:text-gray-300 transition-colors">{whatwedo.name}</a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-bold text-lg leading-normal text-white pb-4">Company</p>
                    <div className="flex flex-col text-white gap-3 text-sm font-normal">
                        {CompanyLinks.map((company) => (
                            <a href="#" key={company.name} className="cursor-pointer hover:text-gray-300 transition-colors">{company.name}</a>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-bold text-lg leading-normal text-white pb-4">Solution</p>
                    <div className="flex flex-col text-white gap-3 text-sm font-normal">
                        {SolutionLinks.map((solution) => (
                            <a href="#" key={solution.name} className="cursor-pointer hover:text-gray-300 transition-colors">{solution.name}</a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-[#DDD0DA] border-b border-[#DDD0DA]'></div>

            <div className="bg-[#FFFFFF0F] p-4 mt-5 mb-8 rounded-lg">
                <div>
                    <h2 className="font-bold text-lg text-white leading-normal pb-2.5">Contact Information</h2>
                    <div className="text-white flex flex-col gap-2.5">
                        <a href="mailto:theteam@tobamsgroup.com" className="text-sm font-normal leading-normal">theteam@tobamsgroup.com</a>
                        <a href="tel:+447886600748" className="text-sm font-normal leading-normal">+447886600748</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg text-white leading-normal pb-2.5">Registered Offices</h2>
                    <div className="flex flex-col gap-10">
                        <p className="text-white text-base font-normal leading-normal"><span className="text-[#EF4353]">United Kingdom</span> <br /> 07451196 (Registered by Company House) Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
                        <p className="text-white text-base font-normal leading-normal"><span className="text-[#EF4353]">Nigeria</span> <br />
                            RC 1048722 (Registered by the Corporate Affairs Commission)
                            4, Muaz Close, Angwari-Rimi
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#DDD0DA] border-b border-[#DDD0DA]'></div>

            <div className="pt-6 pb-2 flex flex-col items-center text-center gap-3.5">
                <div className="flex items-center gap-6 text-sm text-white font-light">
                    <a href="#" className="underline cursor-pointer hover:text-gray-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="underline cursor-pointer hover:text-gray-300 transition-colors">Cookies Policy</a>
                </div>
                <a href="#" className="underline font-light text-sm text-white cursor-pointer hover:text-gray-300 transition-colors">Terms and Conditions</a>
                <p className="text-white font-light text-sm mt-2">Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer