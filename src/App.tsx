import Navbar from "./components/nav-bar";
import { Hero } from "./components/hero";
import { Cocktails } from "./components/cocktails";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import { About } from "./components/about";
import { Art } from "./components/art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
