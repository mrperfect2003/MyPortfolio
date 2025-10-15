"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Projects from "./Projects";
import { FolderOpen, Briefcase, CalendarIcon } from "lucide-react";

// Experience data
const experienceData = [
  {
    title: "Full Stack Developer",
    company: "QuantiqueMinds Pvt. Ltd.",
    period: "October 2025 - Present",
    description: [
      "Developing scalable web applications using Next.js for frontend and Golang for backend",
      "Building RESTful APIs and implementing server-side rendering for optimal performance",
      "Optimizing database queries with MongoDB and implementing efficient data structures",
      "Deploying containerized applications using Docker and managing microservices architecture",
      "Implementing authentication mechanisms and ensuring secure data handling"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Kenshi Labs",
    period: "June 2024 - September 2024",
    description: [
      "Developed and maintained web applications using modern JavaScript frameworks",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and maintained high coding standards"
    ],
  },
  {
    title: "Software Development Intern",
    company: "Roman Technologies",
    period: "January 2024 - May 2024",
    description: [
      "Gained hands-on experience in software development lifecycle and best practices",
      "Worked on various programming languages including JavaScript, Python, and Java",
      "Assisted in debugging and testing applications to ensure quality and reliability",
      "Learned about database management and API integration techniques"
    ],
  }
];

export default function ProjectsExperience() {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", label: "Projects", icon: <FolderOpen className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Work & Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore my professional experience and project portfolio in one streamlined view.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted/50 rounded-lg p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-md"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "projects" ? (
              <Projects />
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8">
                  {experienceData.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <Card className="h-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary flex-shrink-0">
                              <Briefcase className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {exp.company}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <ul className="space-y-2">
                                {exp.description.map((desc, descIndex) => (
                                  <li key={descIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    {desc}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
