"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load sections below the fold for better performance
const EducationAccordion = dynamic(() => import("@/components/EducationAccordion"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});
const ProjectsExperience = dynamic(() => import("@/components/ProjectsExperience"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
});
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingNav = dynamic(() => import("@/components/FloatingNav"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <ProjectsExperience />
      <EducationAccordion />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}
