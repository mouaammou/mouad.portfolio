"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Server } from "lucide-react"

const TechBadge = ({ children }) => (
  <Badge variant="secondary" className="mr-2 mb-2 text-sm">
    {children}
  </Badge>
)

const SkillCard = ({ icon: Icon, title, description }) => (
  <Card className="border-none shadow-none bg-secondary/50">
    <CardContent className="p-6 space-y-2">
      <Icon className="h-6 w-6 mb-2 text-primary" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  
  const skills = [
    "Modern JavaScript/TypeScript",
    "React & Next.js",
    "Supabase",
    "Django & Django REST Framework",
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="container min-h-screen py-12">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Full-Stack Developer
            </h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl h-8">
              {skills[currentText]}
            </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Crafting end-to-end solutions with modern technologies like React, Next.js, Supabase, and Django REST Framework (DRF). 
                Specializing in scalable architectures, cloud-native applications, and delivering exceptional user experiences. 
                Experienced in integrating APIs, optimizing performance, and ensuring security in web applications.
              </p>

          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>React</TechBadge>
            <TechBadge>Next.js</TechBadge>
            <TechBadge>Docker</TechBadge>
            <TechBadge>Supabase</TechBadge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:text-primary">
                <Link href="https://github.com/mouaammou" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="hover:text-primary">
                <Link href="https://linkedin.com/in/mouad-ouaammou-36a7b8175" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="hover:text-primary">
                <Link href="mailto:mouadamassine@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard 
            icon={Code}
            title="Frontend Development"
            description="Building responsive, accessible, and performant user interfaces with React and Next.js"
          />
          <SkillCard 
            icon={Server}
            title="Backend Engineering"
            description="Designing robust APIs and services using Django, Django REST Framework (DRF), and Supabase"
          />
          <SkillCard 
            icon={Database}
            title="Database & Infrastructure"
            description="Managing data with PostgreSQL and deploying to Supabase"
          />
          <SkillCard 
            icon={Code}
            title="DevOps & Infrastructure"
            description="Using Docker, Docker Compose, and cloud services to deploy and manage scalable applications"
          />
        </div>
      </div>
    </div>
  )
}
