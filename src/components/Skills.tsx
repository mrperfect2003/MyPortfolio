"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Layers,
  PenTool,
  Cpu,
  BrainCircuit,
  GitBranch,
  MessageSquare,
  Clock,
  Lightbulb,
  Terminal,
  Container,
  Zap,
  Monitor,
  Cloud,
  Palette,
  CheckSquare,
  Package,
  Bug,
  Users,
  Search,
  Crown,
  Eye,
  Calendar,
  Sparkles,
  BookOpen,
  Handshake,
  RotateCcw
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5 scale
  color: string;
  description?: string; // Optional description for soft skills
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

// Compact skill level indicators
const getLevelIndicator = (level: number) => {
  const stars = "★".repeat(level) + "☆".repeat(5 - level);
  return stars;
};

const getLevelBadge = (level: number) => {
  if (level >= 4) return { text: "Expert", color: "bg-green-500" };
  if (level >= 3) return { text: "Advanced", color: "bg-blue-500" };
  return { text: "Intermediate", color: "bg-yellow-500" };
};

const skillsData: SkillCategory[] = [
          {
            name: "Development & Programming",
            skills: [
              { name: "Next.js", icon: <Layers className="w-5 h-5" />, level: 4, color: "from-slate-700 to-slate-900" },
              { name: "React", icon: <Layers className="w-5 h-5" />, level: 4, color: "from-cyan-400 to-blue-500" },
              { name: "Golang", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-cyan-400 to-blue-500" },
              { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-blue-600 to-blue-800" },
              { name: "JavaScript", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-yellow-400 to-yellow-600" },
              { name: "HTML", icon: <Globe className="w-5 h-5" />, level: 5, color: "from-orange-500 to-red-500" },
              { name: "CSS", icon: <PenTool className="w-5 h-5" />, level: 4, color: "from-blue-500 to-indigo-500" },
              { name: "MongoDB", icon: <Database className="w-5 h-5" />, level: 4, color: "from-green-500 to-green-700" },
              { name: "Python", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-blue-500 to-green-500" },
              { name: "C/C++", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-blue-600 to-blue-800" },
              { name: "Java", icon: <Cpu className="w-5 h-5" />, level: 3, color: "from-red-500 to-orange-500" },
              { name: "Data Structures", icon: <BrainCircuit className="w-5 h-5" />, level: 4, color: "from-green-500 to-emerald-600" },
            ],
          },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: 4, color: "from-orange-400 to-red-500" },
      { name: "GitHub", icon: <GitBranch className="w-5 h-5" />, level: 4, color: "from-purple-500 to-purple-700" },
      { name: "Docker", icon: <Container className="w-5 h-5" />, level: 4, color: "from-blue-400 to-blue-600" },
      { name: "Postman", icon: <Zap className="w-5 h-5" />, level: 4, color: "from-orange-500 to-orange-600" },
      { name: "VS Code", icon: <Monitor className="w-5 h-5" />, level: 5, color: "from-blue-500 to-blue-700" },
      { name: "Linux/Ubuntu", icon: <Terminal className="w-5 h-5" />, level: 4, color: "from-orange-600 to-orange-800" },
      { name: "Netlify/Vercel", icon: <Cloud className="w-5 h-5" />, level: 4, color: "from-cyan-400 to-cyan-600" },
      { name: "MongoDB Compass", icon: <Database className="w-5 h-5" />, level: 4, color: "from-green-500 to-green-700" },
      { name: "Figma", icon: <Palette className="w-5 h-5" />, level: 3, color: "from-purple-400 to-purple-600" },
      { name: "Jira/Trello", icon: <CheckSquare className="w-5 h-5" />, level: 4, color: "from-blue-500 to-indigo-600" },
      { name: "npm/yarn", icon: <Package className="w-5 h-5" />, level: 4, color: "from-red-400 to-red-600" },
      { name: "Chrome DevTools", icon: <Bug className="w-5 h-5" />, level: 4, color: "from-yellow-500 to-yellow-700" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, level: 5, color: "from-yellow-400 to-amber-600", description: "Ability to analyze complex issues and develop effective solutions" },
      { name: "Team Collaboration", icon: <Users className="w-5 h-5" />, level: 4, color: "from-blue-500 to-indigo-500", description: "Working effectively with cross-functional teams and stakeholders" },
      { name: "Communication", icon: <MessageSquare className="w-5 h-5" />, level: 4, color: "from-blue-400 to-indigo-500", description: "Clear articulation of technical concepts to both technical and non-technical audiences" },
      { name: "Time Management", icon: <Clock className="w-5 h-5" />, level: 4, color: "from-green-400 to-green-600", description: "Prioritizing tasks and meeting deadlines in fast-paced environments" },
      { name: "Adaptability", icon: <RotateCcw className="w-5 h-5" />, level: 4, color: "from-purple-400 to-purple-600", description: "Quick learning and adapting to new technologies and changing requirements" },
      { name: "Critical Thinking", icon: <Search className="w-5 h-5" />, level: 4, color: "from-red-400 to-red-600", description: "Analytical approach to debugging and optimizing code" },
      { name: "Leadership", icon: <Crown className="w-5 h-5" />, level: 3, color: "from-yellow-500 to-orange-500", description: "Mentoring junior developers and leading technical initiatives" },
      { name: "Attention to Detail", icon: <Eye className="w-5 h-5" />, level: 5, color: "from-green-500 to-emerald-600", description: "Writing clean, maintainable code with comprehensive testing" },
      { name: "Project Management", icon: <Calendar className="w-5 h-5" />, level: 4, color: "from-indigo-400 to-indigo-600", description: "Planning, organizing, and executing projects from conception to deployment" },
      { name: "Creative Problem Solving", icon: <Sparkles className="w-5 h-5" />, level: 4, color: "from-pink-400 to-purple-500", description: "Innovative approaches to technical challenges and feature implementation" },
      { name: "Continuous Learning", icon: <BookOpen className="w-5 h-5" />, level: 5, color: "from-cyan-400 to-blue-500", description: "Staying updated with latest technologies and industry best practices" },
      { name: "Client Relations", icon: <Handshake className="w-5 h-5" />, level: 4, color: "from-teal-400 to-teal-600", description: "Understanding client needs and translating them into technical solutions" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("development");

  const tabs = [
    { id: "development", label: "Development", icon: <Code2 className="w-4 h-4" /> },
    { id: "tools", label: "Tools", icon: <Container className="w-4 h-4" /> },
    { id: "soft", label: "Soft Skills", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="py-8 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 text-xs border-primary/30 text-primary"
          >
            Expertise
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            Comprehensive skill set spanning modern development technologies and tools.
          </p>
          
          {/* Compact Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-muted/50 rounded-lg p-1 backdrop-blur-sm">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
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
                      layoutId="activeSkillTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compact Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[400px] overflow-hidden"
          >
            {skillsData.map((category, catIndex) => {
              const categoryId = category.name === "Development & Programming" ? "development" :
                                category.name === "Tools & Technologies" ? "tools" :
                                category.name === "Soft Skills" ? "soft" : "";
              
              if (categoryId !== activeTab) return null;
              
              return (
                <motion.div
                  key={catIndex}
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {category.skills.map((skill, index) => {
                    const levelBadge = getLevelBadge(skill.level);
                    
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariant}
                        className="group"
                      >
                        <div className="
                          h-32 bg-gradient-to-br from-card/80 to-card/60 
                          backdrop-blur-xl border border-border/50 rounded-xl 
                          p-4 flex flex-col items-center justify-center text-center
                          hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10
                          transition-all duration-300 cursor-pointer
                          hover:scale-105 hover:-translate-y-1
                        ">
                          {/* Icon */}
                          <motion.div 
                            className="mb-2 p-2 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.icon}
                          </motion.div>

                          {/* Skill Name */}
                          <h4 className="text-xs font-semibold mb-2 text-foreground/90 group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>

                          {/* Level Indicator */}
                          {category.name === "Soft Skills" ? (
                            <div className="text-xs text-muted-foreground">
                              {getLevelIndicator(skill.level)}
                            </div>
                          ) : (
                            <Badge 
                              variant="secondary" 
                              className={`text-xs px-2 py-0.5 ${levelBadge.color} text-white`}
                            >
                              {levelBadge.text}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
