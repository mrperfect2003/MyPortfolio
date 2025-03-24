"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xl text-primary font-medium animate-fade-in">
                Hello,
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animate-delay-1">
                I'm <span className="gradient-text">Keshav Raj</span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-foreground/90 h-14 animate-fade-in animate-delay-2">
                <TypeAnimation
                  sequence={[
                    "Software Developer",
                    1000,
                    "Programmer",
                    1000,
                    "Designer",
                    1000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-muted-foreground text-lg animate-fade-in animate-delay-3">
            I am a passionate Software Developer and Backend Engineer with a strong foundation in Golang, MongoDB,
             and scalable backend architectures. With experience in building RESTful APIs, integrating authentication mechanisms like Keycloak,
              and working with containerized deployments using Docker, I focus on creating efficient and secure applications. Additionally, 
              I have a solid understanding of data structures, algorithms, and full-stack development, with expertise in ReactJS, Python, Java,
               and SQL. As a core team member of the Software Development Club at MVJCE, I actively contribute to innovative projects and stay 
               updated with the latest industry trends. Always eager to learn and solve complex problems, I am driven to build impactful software 
               solutions
            </p>

            <div className="flex flex-wrap gap-4 mt-2 animate-fade-in animate-delay-3">
              <Button size="lg" className="gap-2" asChild>
                <a href="/keshav_resume.pdf" download="Keshav_Resume.pdf">
                  <ArrowDownToLine className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="#contact" className="flex items-center">
                  <ExternalLink className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-muted">
              <Image
                src="https://keshav-raj.web.app/static/media/logo.b36d65247f85d561949d.png"
                alt="Keshav Raj"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
