import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Work from "./components/Work";
import Whyme from "./components/Whyme";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Work />
      <Whyme />
      <Experience />
      <Testimonial />
      <Contact />
    </div>
  );
}
