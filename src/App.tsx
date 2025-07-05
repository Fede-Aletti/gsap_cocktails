import "./App.css";
import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
