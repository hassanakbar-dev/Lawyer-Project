import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutSection from "@/components/home/AboutSection";
import PracticeAreas from "@/components/home/PracticeAreas";
import AttorneyTeam from "@/components/home/AttorneyTeam";
import FirmGallery from "@/components/home/FirmGallery";
import CaseResults from "@/components/home/CaseResults";
import Testimonials from "@/components/home/Testimonials";
import ConsultationSection from "@/components/home/ConsultationSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 selection:bg-amber-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <AboutSection />
        <PracticeAreas />
        <AttorneyTeam />
        <FirmGallery />
        <CaseResults />
        <Testimonials />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
