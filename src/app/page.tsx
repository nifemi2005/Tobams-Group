import Booking from "@/components/Booking";
import CEO from "@/components/CEO";
import ConsultantSection from "@/components/ConsultantSection";
import Footer from "@/components/Footer";
import Get_Touch from "@/components/Get_Touch";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import Management from "@/components/Management";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <LMS />
        <Services />
        <Management />
        <CEO />
        <ConsultantSection />
        <Testimonial />
        <Booking />
        <Get_Touch />
      </main>
      <Footer />
    </div>
  );
}
