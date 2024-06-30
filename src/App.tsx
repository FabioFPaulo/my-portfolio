import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import AppProvider from "./contexts/app";
// import About from "./components/about";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Banner />
      <Experiences />
      <Projects />
      {/* <About /> */}
    </AppProvider>
  );
}

export default App;
