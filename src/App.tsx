import { useState, useEffect, useRef } from "react";
import Nav from "@/components/layout/Nav";
import Particles from "@/components/effects/Particles";
import HomePage from "@/pages/HomePage";
import SkillsPage from "@/pages/SkillsPage";
import ExperiencePage from "@/pages/ExperiencePage";
import ProjectsPage from "@/pages/ProjectsPage";
import EducationPage from "@/pages/EducationPage";
import ContactPage from "@/pages/ContactPage";
import Footer from "@/components/layout/Footer";
import type { Page } from "@/data/navigation";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [renderKey, setRenderKey] = useState(0);
  const prevPage = useRef<Page>("home");

  function navigate(p: Page) {
    if (p === page) return;
    prevPage.current = page;
    setPage(p);
    setRenderKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const pageMap: Record<Page, React.ReactNode> = {
    home:       <HomePage setPage={navigate} />,
    skills:     <SkillsPage />,
    experience: <ExperiencePage />,
    projects:   <ProjectsPage />,
    education:  <EducationPage />,
    contact:    <ContactPage />,
  };

  return (
    <div style={{ background: "#030712", minHeight: "100vh" }}>
      <Particles />
      <Nav page={page} setPage={navigate} />
      <main key={renderKey} style={{ position: "relative", zIndex: 1 }}>
        {pageMap[page]}
      </main>
      <Footer page={page} />
    </div>
  );
}
