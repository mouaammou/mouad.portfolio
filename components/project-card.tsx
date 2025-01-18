"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  imageUrl: string
  githubUrl: string | null
  demoUrl: string | null
  challenges: string
  role: string
  isTeamProject: boolean
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          {project.category === "C/C++" && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="secondary" className="text-lg">Coming Soon</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary">+{project.technologies.length - 3}</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex gap-4">
            {project.githubUrl && (
              <Button variant="outline" size="icon" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="outline" size="icon" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}