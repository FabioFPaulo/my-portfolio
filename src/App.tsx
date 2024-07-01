import Banner from "@/sections/banner";
import Navbar from "@/components/navbar";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";
import AppProvider from "./contexts/app";
import AcademicSection from "./sections/academic";
import FooterSection from "./sections/footer";
// import About from "./components/about";

function App() {
  return (
    <AppProvider totalImages={6}>
      <Navbar />
      <Banner />
      <AcademicSection />
      <Experiences />
      <Projects />
      {/* <About /> */}
      <FooterSection />
    </AppProvider>
  );
}

export default App;
