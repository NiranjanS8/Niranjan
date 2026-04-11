import ScrollProgress from "@/components/ScrollProgress";
import NavBar from "@/components/NavBar";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <Footer />
      <BackToTop />
    </main>
  );
}
