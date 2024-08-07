import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Work from "./components/Work";
import Whyme from "./components/Whyme";
import Brand from "./components/Brand";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Work />
      <Whyme />
      <Contact/>
      <Testimonial/>
      <Brand />
    </div>
  );
}
