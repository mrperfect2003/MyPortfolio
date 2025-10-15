"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Code2, 
  FolderOpen, 
  Briefcase, 
  GraduationCap, 
  Mail,
  ChevronUp
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Code2 className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <FolderOpen className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Prevent infinite loops during programmatic scrolling
      if (isScrolling) return;

      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
      setShowBackToTop(scrollY > 800);

      // Debounce the active section detection
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Determine active section
        const sectionElements = sections.map(section => 
          document.getElementById(section.id)
        ).filter(Boolean);

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const element = sectionElements[i];
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(sections[i].id);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: "smooth" });
      // Reset scrolling flag after animation completes
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset scrolling flag after animation completes
    setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  return (
    <>
      {/* Floating Section Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          >
            <div className="flex flex-col items-center gap-2 p-2 bg-background/80 backdrop-blur-xl border border-border/50 rounded-full shadow-lg">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative p-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={section.label}
                >
                  {section.icon}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
