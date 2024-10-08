import Banner from "@/sections/banner";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";
import AppProvider from "./contexts/app";
import AcademicSection from "./sections/academic";
import FooterSection from "./sections/footer";
import LanguagesSection from "./sections/languages";
// import About from "./components/about";

function App() {
  return (
    <AppProvider totalImages={6}>
      <Banner />
      <AcademicSection />
      <Experiences />
      <Projects />
      <LanguagesSection />
      {/* <About /> */}
      <FooterSection />
    </AppProvider>
  );
}

export default App;
