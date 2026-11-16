import Banner from "@/sections/banner";
import AboutSection from "@/sections/about";
import AcademicSection from "./sections/academic";
import Experiences from "./sections/experiences";
import Projects from "./sections/projects";
import LeadershipSection from "./sections/leadership";
import ConferencesSection from "./sections/conferences";
import CertificationsSection from "./sections/certifications";
import LanguagesSection from "./sections/languages";
import PublicationsSection from "./sections/publications";
import FooterSection from "./sections/footer";
import AppProvider from "./contexts/app";
import HashScrollHandler from "./components/router/HashScrollHandler";
import HeadSEO from "./components/seo/HeadSEO";

function App() {
  return (
    <AppProvider totalImages={2}>
      <HeadSEO />
      <HashScrollHandler />
      <Banner />
      <AboutSection />
      <AcademicSection />
      <Experiences />
      <Projects />
      <LeadershipSection />
      <ConferencesSection />
      <CertificationsSection />
      <LanguagesSection />
      <PublicationsSection />
      <FooterSection />
    </AppProvider>
  );
}

export default App;
