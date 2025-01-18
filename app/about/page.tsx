"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { Timeline } from "@/components/timeline"

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

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Introduction */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a passionate full-stack developer with a strong foundation in mathematics and computer science. 
            My journey in software development has been driven by a desire to create scalable, efficient solutions 
            that make a real impact.
          </p>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-2">
                <h3 className="font-medium text-lg">{skill.category}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">My Journey</h2>
          <Timeline items={journey} />
        </section>

        {/* Download Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Download Resume</h2>
          <div className="flex gap-4">
            <Button>
              <FileDown className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Download Cover Letter
            </Button>
          </div>
        </section>
      </motion.div>
    </div>
  )
}