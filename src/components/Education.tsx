"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Flag } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
  icon: React.ReactNode;
};

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E)",
    institution: "MVJ College of Engineering",
    location: "Bengaluru, Karnataka, India",
    period: "2021-2025",
    grade: "CGPA: 8.29",
    details: [
      "Computer Science and Engineering",
      "Courses: Data Structures, DBMS, Operating System, OOP's, Computer Networks, CAD, Cloud Computing",
      "Member of Software Development Club, MVJCE",
      "NCC Cadet"
    ],
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "VISWASANTHI EM HIGH SCHOOL",
    location: "AP, India",
    period: "2019-2021",
    grade: "grade:-95%",
    details: [
      "Science stream",
      "District level football player"
    
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    degree: "Central Board of Secondary (X) Education",
    institution: "SAINIK SCHOOL NAGROTA JAMMU",
    location: "J&K, India",
    period: "2018",
    grade: "grade:-80.2%",
    details: [
      "House Captain and Sub junior football captain"
    ],
    icon: <Flag className="w-5 h-5" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="bg-secondary/50 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Completed a Bachelor's degree in Computer Science Engineering (CSE) at MVJ College of Engineering.
            I am a detail-oriented Software Developer, Designer, and Programmer with a strong foundation in programming languages
            (Golang, MongoDB, C/C++,  SQL, HTML, CSS, ReactJS) and data structures.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={itemVariant}>
              <Card className="h-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-muted text-primary">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold line-clamp-1">{item.degree}</h3>
                    </div>

                    <div className="mb-4">
                      <p className="text-lg font-medium">{item.institution}</p>
                      <p className="text-muted-foreground">{item.location}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                        <p className="text-sm font-medium text-primary">{item.grade}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-auto">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
