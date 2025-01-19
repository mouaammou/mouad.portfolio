"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, BookOpen, Briefcase, GraduationCap, Server } from "lucide-react"

const milestones = [
  {
    date: "2022-2024",
    title: "Full-stack Engineering at 1337 Coding School",
    description: "Mastered system programming, algorithms, and web development through intensive peer learning and project-based curriculum.",
    icon: <Code2 className="h-5 w-5" />,
    achievements: [
      "Completed core curriculum with distinction",
      "Led team projects in web development",
      "Mentored junior peers in programming concepts"
    ]
  },
  {
    date: "2023",
    title: "School Management Dashboard Project",
    description: "Developed and deployed a comprehensive school management system as a freelance project.",
    icon: <Briefcase className="h-5 w-5" />,
    achievements: [
      "Implemented real-time updates using WebSocket",
      "Designed scalable database architecture",
      "Integrated automated reporting system"
    ]
  },
  {
    date: "2023",
    title: "42 Network Projects",
    description: "Completed advanced system programming projects focusing on low-level implementations.",
    icon: <Server className="h-5 w-5" />,
    achievements: [
      "Built HTTP/1.1 web server from scratch in C++",
      "Implemented Unix shell with job control",
      "Created IRC server with concurrent connections"
    ]
  },
  {
    date: "2019-2021",
    title: "Bachelor's in Mathematics and Computer Science",
    description: "Built strong foundation in theoretical computer science and mathematical concepts.",
    icon: <GraduationCap className="h-5 w-5" />,
    achievements: [
      "Focus on algorithms and data structures",
      "Research in computational mathematics",
      "Academic excellence award recipient"
    ]
  }
]

export default function JourneyPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Career Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From academic foundations to professional achievements, explore the key milestones
            that have shaped my development as a full-stack engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4">
                  <div className="w-full h-full rounded-full bg-background border-2 border-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>

                {/* Content Card */}
                <div className="ml-16">
                  <Card className="border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          {milestone.icon}
                        </div>
                        <div className="space-y-4 flex-1">
                          <div>
                            <div className="text-sm text-primary/80 font-medium">
                              {milestone.date}
                            </div>
                            <h3 className="text-xl font-semibold mt-1">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Key Achievements</h4>
                            <div className="flex flex-wrap gap-2">
                              {milestone.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: (index * 0.2) + (i * 0.1) }}
                                >
                                  <Badge 
                                    variant="secondary"
                                    className="bg-primary/10 hover:bg-primary/20 transition-colors"
                                  >
                                    {achievement}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}