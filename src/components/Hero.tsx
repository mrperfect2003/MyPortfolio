"use client";

import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        
        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
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
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in animate-delay-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Keshav Raj</span>
              </motion.h1>
              <motion.div 
                className="text-2xl md:text-3xl font-semibold text-foreground/90 h-14 animate-fade-in animate-delay-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "Software Engineer",
                    1000,
                    "Problem Solver",
                    1000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  className="bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(45deg, #ffffff, #eab308, #a855f7, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 3s ease infinite",
                  }}
                />
              </motion.div>
            </div>

            <p className="text-muted-foreground text-lg animate-fade-in animate-delay-3">
            I am a passionate Full Stack Developer specializing in Next.js, Golang, and MongoDB. Currently building scalable web applications at QuantiqueMinds, I excel in developing modern frontends with Next.js and robust backends with Golang. With expertise in RESTful APIs, authentication mechanisms like Keycloak, containerized deployments using Docker, and microservices architecture, I create efficient and secure full-stack solutions. I have a strong foundation in data structures, algorithms, and various technologies including React, TypeScript, Python, and SQL. As a core team member of the Software Development Club at MVJCE, I actively contribute to innovative projects and stay updated with the latest industry trends. Always eager to learn and solve complex problems, I am driven to build impactful software solutions.
            </p>

            <motion.div 
              className="flex flex-wrap gap-4 mt-2 animate-fade-in animate-delay-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden" asChild>
                  <a href="/Keshav_resume.pdf" download="Keshav_Resume.pdf">
                    <ArrowDownToLine className="h-4 w-4 group-hover:animate-bounce" />
                    Download Resume
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary/50 hover:border-primary/80 hover:bg-primary/5 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden"
                  asChild
                >
                  <a href="#contact" className="flex items-center">
                    <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Contact Me
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full max-w-md"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 blur-xl animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary/50 to-purple-500/50 shadow-2xl shadow-primary/25">
                <Image
                  src="https://keshav-raj.web.app/static/media/logo.b36d65247f85d561949d.png"
                  alt="Keshav Raj - Full Stack Developer specializing in Next.js and Golang"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
