import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Work from "./components/Work";
import Whyme from "./components/whyme";

export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <About />
      <Work />
      <Whyme/>
    </div>
  );
}
