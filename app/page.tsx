import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Work from "./components/Work";
import Whyme from "./components/Whyme";
import Brand from "./components/Brand";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Work />
      <Whyme />
      <Brand />
    </div>
  );
}
