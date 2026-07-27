import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProjectDetail } from "./components/ProjectDetail";
import { projects, type Project } from "./data/projects";

function projectFromPath(pathname: string): Project | null {
  const match = pathname.match(/^\/case\/([^/]+)\/?$/);
  if (!match) return null;
  return projects.find((p) => p.id === match[1]) ?? null;
}

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(() =>
    projectFromPath(window.location.pathname),
  );
  const [activeSection, setActiveSection] = useState("home");
  // True only for whatever renders before the app's first effect flush, i.e. a
  // fresh page load. Lets ProjectDetail/Home tell "refreshed on this page"
  // apart from "user clicked here in-app", so scroll restoration only kicks
  // in on refresh, not every time a project is opened normally.
  const allowInitialRestore = useRef(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onPopState = () => {
      setActiveProject(projectFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    allowInitialRestore.current = false;
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("scrollSection:home", activeSection);
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [activeSection]);

  const handleOpen = useCallback((project: Project) => {
    setActiveProject(project);
    window.history.pushState({}, "", `/case/${project.id}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleBack = useCallback(() => {
    setActiveProject(null);
    window.history.pushState({}, "", "/");
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
        window.history.pushState({}, "", "/");
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
            <ProjectDetail
              project={activeProject}
              onOpen={handleOpen}
              restoreScroll={allowInitialRestore.current}
            />
          </motion.main>
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Home
              onOpen={handleOpen}
              onSectionChange={setActiveSection}
              restoreScroll={allowInitialRestore.current}
            />
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
