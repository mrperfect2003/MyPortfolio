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
    title: "Associate Full Stack Engineer",
    company: "QuantiqueMinds Pvt. Ltd.",
    period: "September 2025 - Present",
    description: [
      "Architecting and developing enterprise-grade HRMS applications using Go (Golang) with Fiber framework and Next.js with React",
      "Designing and implementing secure RESTful APIs with JWT authentication and role-based access control (RBAC) for multiple user hierarchies",
      "Building comprehensive HR modules including Employee Management, Attendance Tracking, Leave Management, and Payroll Processing",
      "Optimizing MongoDB operations with advanced aggregation pipelines and indexing strategies, improving query performance by 40%",
      "Deploying containerized applications using Docker and managing cloud infrastructure on AWS EC2, ensuring 99.9% uptime"
    ],
  },
  {
    title: "Associate Backend Engineer",
    company: "Kenshi Labs Consultancy Pvt. Ltd.",
    period: "November 2024 - August 2025",
    description: [
      "Engineered full-stack solutions using Go (Golang) with Fiber framework for high-performance backend services and Next.js for dynamic frontend",
      "Developed and deployed HRMS platform featuring Payroll & Compensation Management and Reports & Analytics with real-time data processing",
      "Integrated Razorpay Payment Gateway with secure transaction handling and webhook management for automated payment reconciliation",
      "Built scalable buyer-seller marketplace APIs with advanced filtering, search functionality, and pagination, supporting 10,000+ concurrent users",
      "Implemented robust authentication systems with JWT tokens and email OTP verification, reducing unauthorized access attempts by 95%"
    ],
  },
  {
    title: "Web Development Intern",
    company: "Briefiy Media Pvt. Ltd.",
    period: "October 2023 - November 2023",
    description: [
      "Completed intensive front-end development internship focused on creating responsive, user-friendly websites using HTML5 and CSS3",
      "Collaborated with cross-functional teams including senior developers and designers to implement pixel-perfect UI components",
      "Optimized website performance and accessibility, achieving 95+ scores on Lighthouse audits",
      "Recognized for exceptional attention to detail, high-quality code delivery, and ability to meet tight deadlines"
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
