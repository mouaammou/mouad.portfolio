"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certificates = [
  {
    id: "1",
    title: "Full-Stack Development",
    issuer: "1337 Coding School",
    issueDate: "2024",
    credentialUrl: "https://example.com/cert1",
    imageUrl: "https://images.unsplash.com/photo-1496469888073-80de7e952517",
    skills: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: "2",
    title: "Advanced Algorithms",
    issuer: "Mathematics Department",
    issueDate: "2021",
    credentialUrl: "https://example.com/cert2",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    skills: ["Data Structures", "Algorithm Analysis", "Problem Solving"]
  },
  {
    id: "3",
    title: "System Programming",
    issuer: "42 Network",
    issueDate: "2023",
    credentialUrl: "https://example.com/cert3",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    skills: ["C/C++", "Operating Systems", "Network Programming"]
  },
  {
    id: "4",
    title: "Cloud Architecture",
    issuer: "AWS",
    issueDate: "2023",
    credentialUrl: "https://example.com/cert4",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    skills: ["AWS", "Cloud Infrastructure", "DevOps"]
  }
]

export default function CertificatesPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter">Certificates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of professional certifications and academic achievements,
            showcasing continuous learning and expertise in various technical domains.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">Issued: {cert.issueDate}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {cert.credentialUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}