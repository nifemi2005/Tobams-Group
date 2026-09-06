import CEO from "@/components/CEO";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import Management from "@/components/Management";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LMS />
      <Services />
      <Management />
      <CEO />
    </div>
  );
}
