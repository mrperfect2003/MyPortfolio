"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  skills: string[];
};

const certificationsData: Certification[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Coursera / University",
    date: "2024",
    credentialLink: "#",
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Golang Backend Development",
    issuer: "Udemy / Tech Platform",
    date: "2024",
    credentialLink: "#",
    skills: ["Golang", "REST APIs", "Microservices"]
  },
  {
    name: "Next.js & React Advanced Patterns",
    issuer: "Online Learning Platform",
    date: "2025",
    credentialLink: "#",
    skills: ["Next.js", "React", "TypeScript"]
  },
  {
    name: "Docker & Kubernetes",
    issuer: "Cloud Academy",
    date: "2024",
    credentialLink: "#",
    skills: ["Docker", "Kubernetes", "DevOps"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Continuous learning and professional development through certified courses and training programs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificationsData.map((cert, index) => (
            <motion.div key={index} variants={itemVariant}>
              <Card className="h-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      
                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {cert.credentialLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 w-full md:w-auto"
                          asChild
                        >
                          <a 
                            href={cert.credentialLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            View Credential
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

