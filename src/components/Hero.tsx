import Image from 'next/image';

function Hero() {
    return (
        <section className="relative w-full min-h-90 lg:min-h-[80vh] flex items-center overflow-hidden">
            <Image
                src="/images/hero-bg.jpg"
                alt="Hero background"
                fill
                priority
                className="object-cover -z-10"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 -z-10" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white text-center">
                <div>
                    <span className='text-xs md:text-sm leading-normal font-semibold py-2.5 px-8 md:py-3 md:px-12 bg-white/10 rounded-full'>WHAT WE DO</span>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-[56px] mt-3.5'>Learning and Development</h1>
                    <p className='font-semibold text-sm md:text-base lg:text-lg mt-2.5 leading-normal px-5'>Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.</p>
                    <button className='bg-[#571244] py-[11.5px] px-5.5 font-semibold text-sm lg:text-lg rounded-sm cursor-pointer hover:bg-[#460e36] transition-colors shadow-md mt-5 lg:mt-9'>Book a Consultation</button>
                </div>
            </div>
        </section>
    )
}

export default Hero