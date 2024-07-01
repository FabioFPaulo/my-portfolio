import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Experiences from "./sections/experiences";
import Projects from "./components/projects";
import AppProvider from "./contexts/app";
// import About from "./components/about";

function App() {
  return (
    <AppProvider totalImages={6}>
      <Navbar />
      <Banner />
      <Experiences />
      <Projects />
      {/* <About /> */}
    </AppProvider>
  );
}

export default App;
