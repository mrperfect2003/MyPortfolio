"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { ExternalLink, Code, Github, MousePointer, ShoppingCart } from "lucide-react";
import Portfolio from "../Images/portfolio.jpg"
import coffee from "../Images/gbmc.jpg"
import shopify from "../Images/shopify.png"
import banking from "../Images/banking.jpg"

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
  features: string[];
  tags: string[];
  icon: React.ReactNode;
  period: string;
};

const projectsData: Project[] = [
  {
    title: "fresh coffee in the morning",
    description: "Built using HTML, CSS, JavaScript and used component-based approach for website building.",
    image: coffee,
    link: "https://fresh-coffee-in-the-morning.web.app/",
    features: [
    "Fresh Coffee in the Morning is a beautifully designed website that offers a seamless coffee shopping experience.",
    "It features an inviting home section, a detailed menu showcasing delicious coffee options, and a products page for easy purchases.",
    " Visitors can explore the about us section to learn the brand’s story, read customer reviews for insights, and stay updated with engaging blog post about coffee.",
    " The site also includes a contact us section for inquiries, ensuring a smooth and interactive user experience. With its clean layout and engaging content, this website is perfect for coffee lovers looking for quality and convenience."
    ],
    tags: ["JavaScript", "HTML", "CSS", "Component-based Design"],
    icon: <Code className="w-5 h-5" />,
    period: "2025"
  },
  {
    title: "Personal Portfolio",
    description: "Designed and developed a personal portfolio website using Next.js, Tailwind CSS, and Framer Motion, showcasing my skills, projects, and contact information.",
    image: Portfolio,
    link: "https://keshav-raj.web.app/",
    features: [
      "Implemented responsive design for mobile and desktop views",
      "Utilized Framer Motion for animations and transitions",
      "Integrated Tailwind CSS for rapid styling and customization"
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    icon: <MousePointer className="w-5 h-5" />,
    period: "2024"
  },
  {
    title: "E-commerce Website",
    description: "Built using ReactJs, HTML, CSS and used component-based approach for website building.",
    image: shopify,
    link: "https://shopifyecommercewebsite.web.app/",
    features: [
      "Utilized React Router and React Compare libraries for seamless transitions and navigation",
      "Key components include Header, Slider, Virtual, Product, Testimonials, and Footer",
      "The Slider component displays items and groups similar products via props"
    ],
    tags: ["React", "HTML", "CSS", "Component-based Design"],
    icon: <Code className="w-5 h-5" />,
    period: "2023"
  },
  {
    title: "Basic Banking Website",
    description: "The Basic Banking Website, crafted with PHP, CSS, Bootstrap, and SQL on XAMPP, simulates fundamental banking operations in an educational web environment.",
    image: banking,
    link: "https://swiss-foundation.000webhostapp.com/",
    features: [
      "Leveraging MySQL integration for secure user data storage and management",
      "Ensuring a reliable and seamless experience",
      "Educational banking simulation project"
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "XAMPP", "CSS"],
    icon: <Code className="w-5 h-5" />,
    period: "2022"
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/30 text-primary">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore some of my recent web development projects, showcasing my skills in various technologies and frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <Card className="h-full overflow-hidden border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.link && (
                      <Button asChild variant="default" size="sm" className="gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-muted text-primary">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>

                  <div className="mb-1 text-sm text-muted-foreground">
                    {project.period}
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
