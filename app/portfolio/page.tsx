"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ProjectDialog } from "@/components/project-dialog"

const categories = ["All", "Team Projects", "Individual Projects", "C/C++"]

const projects = [
  {
    id: "1",
    title: "Ft_Transcendence",
    description: "Real-time multiplayer Pong game with chat and matchmaking.",
    category: "Team Projects",
    technologies: ["React", "Next.js", "Django REST", "WebSocket"],
    imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9",
    githubUrl: "https://github.com/mouaammou/ft_transcendence",
    demoUrl: "https://demo.com",
    challenges: "Implementing real-time game synchronization and handling WebSocket connections.",
    role: "Frontend Lead & WebSocket Integration",
    isTeamProject: true
  },
  {
    id: "2",
    title: "WebServer",
    description: "HTTP/1.1 compliant web server from scratch.",
    category: "Individual Projects",
    technologies: ["C++", "Networking", "HTTP Protocol"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    githubUrl: "https://github.com/mouaammou/webserve",
    demoUrl: null,
    challenges: "Implementing HTTP protocol and handling concurrent connections.",
    role: "Solo Developer",
    isTeamProject: false
  },
  {
    id: "3",
    title: "School Dashboard",
    description: "Comprehensive school management system.",
    category: "Individual Projects",
    technologies: ["React", "Node.js", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    githubUrl: "https://github.com/mouaammou",
    demoUrl: "https://demo.com",
    challenges: "Designing a scalable database schema and implementing real-time updates.",
    role: "Full-stack Developer",
    isTeamProject: false
  },
  {
    id: "4",
    title: "Operating System",
    description: "Mini operating system implementation (Coming Soon)",
    category: "C/C++",
    technologies: ["C", "Assembly", "OS Concepts"],
    imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    githubUrl: null,
    demoUrl: null,
    challenges: "Work in progress",
    role: "System Programmer",
    isTeamProject: false
  }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
          <h1 className="text-4xl font-bold tracking-tighter">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my projects, from team collaborations to individual endeavors.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Details Dialog */}
        <ProjectDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        />
      </motion.div>
    </div>
  )
}