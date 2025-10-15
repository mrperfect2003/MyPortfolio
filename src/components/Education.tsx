"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Flag, GraduationCap, Trophy, Star } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
  icon: React.ReactNode;
  size: "small" | "medium" | "large";
  color: "blue" | "purple" | "green" | "orange";
  achievements?: string[];
};

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E)",
    institution: "MVJ College of Engineering",
    location: "Bengaluru, Karnataka, India",
    period: "2021-2025",
    grade: "CGPA: 8.5",
    size: "large",
    color: "blue",
    details: [
      "Computer Science and Engineering",
      "Courses: Data Structures, DBMS, Operating System, OOP's, Computer Networks, CAD, Cloud Computing",
      "Member of Software Development Club, MVJCE",
      "NCC Cadet"
    ],
    achievements: [
      "Software Development Club Member",
      "NCC Cadet",
      "Active in Technical Events"
    ],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "VISWASANTHI EM HIGH SCHOOL",
    location: "AP, India",
    period: "2019-2021",
    grade: "95%",
    size: "medium",
    color: "purple",
    details: [
      "Science stream",
      "District level football player"
    ],
    achievements: [
      "District Level Football Player",
      "Science Stream Excellence"
    ],
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    degree: "Central Board of Secondary (X) Education",
    institution: "SAINIK SCHOOL NAGROTA JAMMU",
    location: "J&K, India",
    period: "2018",
    grade: "80.2%",
    size: "medium",
    color: "green",
    details: [
      "House Captain and Sub junior football captain"
    ],
    achievements: [
      "House Captain",
      "Sub Junior Football Captain"
    ],
    icon: <Star className="w-6 h-6" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
    case "medium":
      return "col-span-1 md:col-span-1 lg:col-span-1 row-span-1";
    case "small":
      return "col-span-1 md:col-span-1 lg:col-span-1 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/20",
        iconBg: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-400",
        gradient: "from-blue-500 to-cyan-500",
        hover: "hover:border-blue-500/40 hover:shadow-blue-500/20"
      };
    case "purple":
      return {
        bg: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20",
        iconBg: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-400",
        gradient: "from-purple-500 to-pink-500",
        hover: "hover:border-purple-500/40 hover:shadow-purple-500/20"
      };
    case "green":
      return {
        bg: "from-green-500/10 to-emerald-500/10",
        border: "border-green-500/20",
        iconBg: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-400",
        gradient: "from-green-500 to-emerald-500",
        hover: "hover:border-green-500/40 hover:shadow-green-500/20"
      };
    case "orange":
      return {
        bg: "from-orange-500/10 to-red-500/10",
        border: "border-orange-500/20",
        iconBg: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-400",
        gradient: "from-orange-500 to-red-500",
        hover: "hover:border-orange-500/40 hover:shadow-orange-500/20"
      };
    default:
      return {
        bg: "from-gray-500/10 to-gray-600/10",
        border: "border-gray-500/20",
        iconBg: "from-gray-500/20 to-gray-600/20",
        iconColor: "text-gray-400",
        gradient: "from-gray-500 to-gray-600",
        hover: "hover:border-gray-500/40 hover:shadow-gray-500/20"
      };
  }
};

export default function Education() {
  return (
    <section id="education" className="py-12">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive educational foundation spanning from military school discipline to engineering excellence,
            building a strong foundation for software development and technical leadership.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]"
        >
          {educationItems.map((item, index) => {
            const sizeClasses = getSizeClasses(item.size);
            const colorClasses = getColorClasses(item.color);
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariant}
                className={`${sizeClasses} group`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className={`
                  h-full overflow-hidden backdrop-blur-xl transition-all duration-300
                  bg-gradient-to-br ${colorClasses.bg} to-card/80
                  border ${colorClasses.border}
                  ${colorClasses.hover}
                  hover:shadow-xl group-hover:shadow-2xl
                  relative
                `}>
                  {/* Animated background gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${colorClasses.bg} 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `} />
                  
                  <CardContent className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className={`
                            p-3 rounded-xl bg-gradient-to-br ${colorClasses.iconBg}
                            ${colorClasses.iconColor}
                            group-hover:scale-110 transition-transform duration-300
                          `}
                          whileHover={{ rotate: 5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <h3 className={`text-lg font-bold bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent`}>
                            {item.degree}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">{item.institution}</p>
                        </div>
                      </div>
                      
                      {/* Grade Badge */}
                      <Badge 
                        variant="secondary" 
                        className={`
                          bg-gradient-to-r ${colorClasses.gradient} text-white
                          px-3 py-1 text-xs font-semibold
                          group-hover:scale-105 transition-transform duration-300
                        `}
                      >
                        {item.grade}
                      </Badge>
                    </div>

                    {/* Institution Details */}
                    <div className="mb-4 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500" />
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                        <p className="text-sm text-muted-foreground font-medium">{item.period}</p>
                      </div>
                    </div>

                    {/* Achievements Section */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.achievements.slice(0, item.size === 'large' ? 3 : 2).map((achievement, i) => (
                            <Badge 
                              key={i}
                              variant="outline" 
                              className={`
                                text-xs px-2 py-1 border ${colorClasses.border}
                                bg-gradient-to-r ${colorClasses.bg}
                                group-hover:border-opacity-60 transition-all duration-300
                              `}
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Course Details (for large cards) */}
                    {item.size === 'large' && (
                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold mb-2 text-foreground/80">Course Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {item.details.slice(0, 4).map((detail, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`
                                w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0
                                bg-gradient-to-r ${colorClasses.gradient}
                              `} />
                              <p className="text-xs text-foreground/70 leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Smaller cards - simplified details */}
                    {item.size !== 'large' && (
                      <div className="mt-auto">
                        <div className="space-y-1">
                          {item.details.slice(0, 2).map((detail, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`
                                w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0
                                bg-gradient-to-r ${colorClasses.gradient}
                              `} />
                              <p className="text-xs text-foreground/70 leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>

                  {/* Decorative corner element */}
                  <div className={`
                    absolute top-4 right-4 w-8 h-8 rounded-full
                    bg-gradient-to-br ${colorClasses.gradient} opacity-10
                    group-hover:opacity-20 transition-opacity duration-300
                  `} />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
