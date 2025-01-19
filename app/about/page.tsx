"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Github, Linkedin, Mail } from "lucide-react"
import { Timeline } from "@/components/timeline"
import { Card } from "@/components/ui/card"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Django", "PostgreSQL", "REST APIs"] },
  { category: "Languages", items: ["JavaScript", "Python", "C/C++", "SQL"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "VS Code"] },
]

const journey = [
  {
    date: "2019-2021",
    title: "Bachelor's in Mathematics and Computer Science",
    description: "Foundational studies in algorithms, data structures, and mathematical concepts.",
  },
  {
    date: "2022-2024",
    title: "Full-stack Engineering at 1337 Coding School",
    description: "Intensive program focusing on practical software development and system programming.",
  },
  {
    date: "2023",
    title: "School Management Dashboard",
    description: "Freelance project implementing a comprehensive school management system.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const skillCardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <div className="container py-12 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mouad Ouaammou
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack Developer passionate about creating scalable solutions
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-center">
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={skillCardVariants}
                whileHover="hover"
              >
                <Card className="p-6 h-full bg-background/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
                  <h3 className="font-medium text-lg mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-semibold text-center">
            My Journey
          </motion.h2>
          <Timeline items={journey} />
        </motion.section>

        {/* Download Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-semibold">
            Download Resume
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Button className="group">
              <FileDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
            <Button variant="outline" className="group">
              <FileDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download Cover Letter
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}