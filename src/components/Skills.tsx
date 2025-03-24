"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Globe,
  Layers,
  PenTool,
  Server,
  Smartphone,
  Cpu,
  BrainCircuit,
  GitBranch,
  MessageSquare,
  Clock,
  Lightbulb
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5 scale
  color: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    name: "Development & Programming",
    skills: [
      { name: "HTML", icon: <Globe className="w-5 h-5" />, level: 5, color: "from-orange-500 to-red-500" },
      { name: "CSS", icon: <PenTool className="w-5 h-5" />, level: 4, color: "from-blue-500 to-indigo-500" },
      { name: "JavaScript", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-yellow-400 to-yellow-600" },
      { name: "C/C++", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-blue-600 to-blue-800" },
      { name: "SQL", icon: <Database className="w-5 h-5" />, level: 4, color: "from-blue-400 to-blue-600" },
      { name: "Java", icon: <Cpu className="w-5 h-5" />, level: 3, color: "from-red-500 to-orange-500" },
      { name: "Python", icon: <Code2 className="w-5 h-5" />, level: 4, color: "from-blue-500 to-green-500" },
      { name: "PHP", icon: <Server className="w-5 h-5" />, level: 3, color: "from-indigo-500 to-purple-500" },
      { name: "XAMPP", icon: <Server className="w-5 h-5" />, level: 3, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    name: "Version Control & Tools",
    skills: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: 4, color: "from-orange-400 to-red-500" },
      { name: "GitHub", icon: <GitBranch className="w-5 h-5" />, level: 4, color: "from-purple-500 to-purple-700" },
      { name: "Responsive Design", icon: <Smartphone className="w-5 h-5" />, level: 5, color: "from-purple-500 to-pink-500" },
      { name: "React.js", icon: <Layers className="w-5 h-5" />, level: 4, color: "from-cyan-400 to-blue-500" },
      { name: "Data Structures", icon: <BrainCircuit className="w-5 h-5" />, level: 4, color: "from-green-500 to-emerald-600" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", icon: <MessageSquare className="w-5 h-5" />, level: 4, color: "from-blue-400 to-indigo-500" },
      { name: "Time Management", icon: <Clock className="w-5 h-5" />, level: 4, color: "from-green-400 to-green-600" },
      { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, level: 5, color: "from-yellow-400 to-amber-600" },
      { name: "Team Collaboration", icon: <Layers className="w-5 h-5" />, level: 4, color: "from-blue-500 to-indigo-500" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary"
          >
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            With a strong foundation in various programming languages and technologies,
            I bring a comprehensive skill set to every project I undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {category.name}
                  </h3>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariant}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-full bg-muted text-primary`}>
                              {skill.icon}
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < skill.level
                                    ? "bg-primary"
                                    : "bg-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level * 20}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
