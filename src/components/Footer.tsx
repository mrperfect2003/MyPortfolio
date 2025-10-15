"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-t border-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold gradient-text">Keshav Raj</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
            Passionate Full Stack Developer | Next.js & Golang Specialist | MongoDB Enthusiast.
             Always exploring new technologies and solving real-world problems with scalable solutions. Let's build something amazing together!
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:contacttokeshavraj@gmail.com" className="hover:text-primary transition-colors">
                  contacttokeshavraj@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9162406872</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>ITPL, Whitefield, Bengaluru, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/mrperfect2003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="group p-3 rounded-full bg-gradient-to-br from-gray-700/50 to-gray-600/50 hover:from-gray-600/80 hover:to-gray-500/80 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-500/25"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/keshavraj18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn"
                className="group p-3 rounded-full bg-gradient-to-br from-blue-700/50 to-blue-600/50 hover:from-blue-600/80 hover:to-blue-500/80 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
              </motion.a>
              <motion.a
                href="mailto:contacttokeshavraj@gmail.com"
                aria-label="Send me an email"
                className="group p-3 rounded-full bg-gradient-to-br from-primary/50 to-purple-600/50 hover:from-primary/80 hover:to-purple-600/80 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/25"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Keshav Raj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center gap-1">
            Designed & Developed with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
          </p>
        </div>
      </div>

      {showScrollToTop && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="relative"
          >
            <Button
              variant="outline"
              size="icon"
              className="relative rounded-full bg-gradient-to-br from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-primary-foreground border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden group"
            >
              <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            
            {/* Animated trail effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </footer>
  );
}
