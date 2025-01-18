"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

interface ProjectDialogProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Role</h4>
              <p className="text-muted-foreground">{project.role}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Challenges & Solutions</h4>
              <p className="text-muted-foreground">{project.challenges}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}