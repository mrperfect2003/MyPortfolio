"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  FolderOpen, 
  Briefcase, 
  GraduationCap, 
  Mail,
  ArrowRight
} from "lucide-react";

const sections = [
  {
    id: "skills",
    title: "Skills",
    description: "Technical expertise and development tools",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "projects",
    title: "Projects",
    description: "Explore my development portfolio and achievements",
    icon: <FolderOpen className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "experience",
    title: "Experience",
    description: "Professional journey and career milestones",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "education",
    title: "Education",
    description: "Academic background and achievements",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch and start a conversation",
    icon: <Mail className="w-6 h-6" />,
    color: "from-teal-500 to-blue-500"
  }
];

export default function SectionPreview() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Quick Navigation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Jump directly to any section that interests you most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full cursor-pointer group overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                onClick={() => scrollToSection(section.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {section.description}
                  </p>

                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
