import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
// import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Experiences />
      <Projects />
      {/* <About /> */}
    </div>
  );
}

export default App;
