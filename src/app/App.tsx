import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProjectDetail } from "./components/ProjectDetail";
import { type Project } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const handleOpen = useCallback((project: Project) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleBack = useCallback(() => {
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleNavigate = useCallback(
    (section: string) => {
      const go = () => {
        if (section === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }
      };
      if (activeProject) {
        setActiveProject(null);
        requestAnimationFrame(() => setTimeout(go, 80));
        return;
      }
      go();
    },
    [activeProject],
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        active={activeProject ? "work" : activeSection}
        onNavigate={handleNavigate}
        showBack={!!activeProject}
        onBack={handleBack}
      />

      <AnimatePresence mode="wait">
        {activeProject ? (
          <motion.main
            key={activeProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectDetail project={activeProject} onOpen={handleOpen} />
          </motion.main>
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Home onOpen={handleOpen} onSectionChange={setActiveSection} />
          </motion.main>
        )}
      </AnimatePresence>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: "1rem",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
    </div>
  );
}
