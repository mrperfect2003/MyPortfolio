"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experienceData: ExperienceItem[] = [
  {
    title: "Backend Developer",
    company: "Kenshi Labs  Consultancy Pvt. Ltd",
    period: "2025",
    description: [
      "Completed a three-month backe-end development internship at Kenshi Labs in 2024",
      "As a Backend Engineer at Kenshi Labs, I worked on building scalable and efficient backend systems using Golang and MongoDB. I contributed to designing and implementing RESTful APIs, optimizing database queries, and integrating authentication mechanisms like Keycloak for secure access management. My role also involved working with Docker for containerized deployments and leveraging middleware in Golang to enhance application performance. Additionally, I gained hands-on experience in microservices architecture, improving system modularity and scalability. Through this experience, I strengthened my problem-solving skills and deepened my expertise in backend development."
    ]
  },
  {
    "title": "Software Development Intern",
    "company": "Roman Technologies",
    "period": "2024",
    "description": [
      "Completed a three-month software development internship at Roman Technologies in 2025.",
      "As a Software Development Intern, I gained hands-on experience in software engineering principles and programming languages such as Golang, Python, Java, and C++. I worked on developing scalable applications, writing clean and efficient code, and understanding the fundamentals of backend and frontend development.",
      "During my internship, I collaborated on projects involving RESTful API development, database management, and debugging applications to enhance performance. I also explored software development best practices, improving my problem-solving skills and deepening my understanding of full-stack development."
    ]
  },
  {
    title: "Web Developer",
    company: "BRIFLY MEDIA PVT. LTD",
    period: "2023",
    description: [
      "Completed a one-month front-end development internship at Brifly Media in 2023, creating and optimizing user-friendly websites with HTML and CSS.",
      "Collaborated with senior developers, enhanced UX with interactive elements, and received praise for high-quality work, attention to detail, and teamwork within tight deadlines."
    ]
  },
  {
    title: "Design & Content team",
    company: "Software Development Club (SDC, MVJCE)",
    period: "2022",
    description: [
      "Demonstrated mastery in harnessing design tools like Figma and Canva to craft visually stunning assets collaborative projects. Applied Canva and Figma skills to develop compelling designs, ensuring alignment with project requirements and objectives.",
      "Researched, meticulously crafted, and polished captivating articles for the Software Development Club magazine, resulting in a substantial increase in readership and a boost in club membership."
    ]
  }
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

export default function Experience() {
  return (
    <section id="experience" className="bg-secondary/50 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A look at my professional experiences and roles that have shaped my career in web development and design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1.5 md:-translate-x-2 mt-1.5" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-left md:pr-12" : "md:pl-12"}`}>
                <Card className="overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2">
                      <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-center" : ""}`}>
                        <BriefcaseIcon className="w-4 h-4 text-primary" />
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                      </div>

                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-center" : ""}`}>
                        <p className="text-foreground/80 font-medium">{experience.company}</p>
                      </div>

                      <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <CalendarIcon className="w-3.5 h-3.5" />
                        <span>{experience.period}</span>
                      </div>

                      <div className="space-y-3">
                        {experience.description.map((paragraph, i) => (
                          <p key={i} className="text-sm text-foreground/80">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
