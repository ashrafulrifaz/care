import About from "@/components/HomeComponents/About";
import Hero from "@/components/HomeComponents/Hero";
import Services from "@/components/HomeComponents/Services";
import Testimonials from "@/components/HomeComponents/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}
