import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProjectDetail } from "./components/ProjectDetail";
import { projects, type Project } from "./data/projects";

function projectFromPath(pathname: string): Project | null {
  const match = pathname.match(/^\/case\/([^/]+)\/?$/);
  if (!match) return null;
  // Unavailable projects have no real route — direct/bookmarked navigation
  // to their /case/{id} URL falls back to the homepage instead of
  // rendering the reader, matching the Work card's blocked click.
  const project = projects.find((p) => p.id === match[1]);
  return project && !project.unavailable ? project : null;
}

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(() =>
    projectFromPath(window.location.pathname),
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onPopState = () => {
      setActiveProject(projectFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // A /case/{id} URL that doesn't resolve to an available project (direct
  // nav, a stale bookmark, or an unavailable project's link) falls back to
  // rendering Home above, but the address bar would otherwise keep showing
  // that dead URL — clean it up so a refresh or share doesn't carry it forward.
  useEffect(() => {
    if (!activeProject && /^\/case\/[^/]+\/?$/.test(window.location.pathname)) {
      window.history.replaceState({}, "", "/");
    }
  }, [activeProject]);

  // Persist the exact scroll offset per path (not "which section was
  // active"), so a refresh — including mid-case-study — puts the reader
  // back exactly where they were, not at the top of the nearest section or
  // back on the homepage. Save continuously while scrolling...
  useEffect(() => {
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        try {
          sessionStorage.setItem(`scrollY:${window.location.pathname}`, String(window.scrollY));
        } catch {
          // ignore storage errors (e.g. private browsing)
        }
        queued = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ...and restore it once, only on a genuine fresh load (this effect runs
  // exactly once for the lifetime of the app — in-app navigation changes
  // `activeProject`/the URL via pushState without remounting App). Layout
  // can still be settling right after mount (images, the Process section's
  // measured-height pass), so the same target position is (harmlessly)
  // re-applied a few times rather than trusting one early attempt.
  useEffect(() => {
    let saved: number | null = null;
    try {
      const raw = sessionStorage.getItem(`scrollY:${window.location.pathname}`);
      saved = raw ? Number(raw) : null;
    } catch {
      saved = null;
    }
    if (saved === null || Number.isNaN(saved)) return;
    // "auto" defers to the global `scroll-behavior: smooth` CSS rule (it
    // does not mean instant) — a full-page smooth-scroll animation on every
    // refresh is itself a jarring "change of view", so force a true instant
    // jump here regardless of that CSS rule.
    const restore = () => window.scrollTo({ top: saved!, behavior: "instant" });
    restore();
    const raf = requestAnimationFrame(restore);
    const t1 = setTimeout(restore, 150);
    const t2 = setTimeout(restore, 500);
    window.addEventListener("load", restore);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", restore);
    };
  }, []);

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
