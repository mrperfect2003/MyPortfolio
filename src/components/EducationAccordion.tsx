"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ChevronDown } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  courses: string[];
  achievements: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "MVJ College of Engineering",
    duration: "2021 - 2025",
    cgpa: "8.64 CGPA",
    courses: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Web Development"
    ],
    achievements: [
      "Active member of the Software Development Club (SDC)",
      "Core team member contributing to innovative projects",
      "Participated in coding competitions and hackathons",
      "Maintained consistent academic performance"
    ]
  },
  {
    degree: "Pre-University College (PUC)",
    institution: "Sri Chaitanya PU College",
    duration: "2019 - 2021",
    cgpa: "94%",
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science"
    ],
    achievements: [
      "Strong foundation in science and mathematics",
      "Developed problem-solving and analytical thinking skills",
      "Active participation in science fairs and competitions"
    ]
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Sri Chaitanya Techno School",
    duration: "2018 - 2019",
    cgpa: "92%",
    courses: [
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Kannada"
    ],
    achievements: [
      "Excellent academic performance",
      "Strong foundation in core subjects",
      "Active participation in school activities"
    ]
  }
];

export default function EducationAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-12 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My educational background that has shaped my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <motion.button
                    onClick={() => toggleExpanded(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{education.degree}</h3>
                        <p className="text-muted-foreground">{education.institution}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-primary font-medium">{education.duration}</span>
                          <span className="text-sm text-muted-foreground">{education.cgpa}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Key Courses</h4>
                            <div className="flex flex-wrap gap-2">
                              {education.courses.map((course, courseIndex) => (
                                <Badge key={courseIndex} variant="secondary" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Achievements</h4>
                            <ul className="space-y-2">
                              {education.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
