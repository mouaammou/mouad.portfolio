"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = ["All", "React", "Next.js", "Django", "REST APIs", "Freelancing"]

const blogPosts = [
  {
    id: "1",
    title: "Understanding SSR in Next.js",
    excerpt: "A deep dive into Server-Side Rendering in Next.js and its benefits for web applications.",
    category: "Next.js",
    date: "2024-03-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["Next.js", "SSR", "React", "Performance"]
  },
  {
    id: "2",
    title: "Building REST APIs with Django",
    excerpt: "Learn how to create robust and scalable REST APIs using Django REST framework.",
    category: "Django",
    date: "2024-03-10",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    tags: ["Django", "REST APIs", "Python", "Backend"]
  },
  {
    id: "3",
    title: "Freelancing Tips for Developers",
    excerpt: "Essential tips and strategies for developers starting their freelancing journey.",
    category: "Freelancing",
    date: "2024-03-05",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    tags: ["Freelancing", "Career", "Tips"]
  },
  {
    id: "4",
    title: "React Performance Optimization",
    excerpt: "Advanced techniques for optimizing React applications for better performance.",
    category: "React",
    date: "2024-03-01",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tags: ["React", "Performance", "JavaScript"]
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
          <h1 className="text-4xl font-bold tracking-tighter">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Insights and tutorials about web development, system programming,
            and my journey as a full-stack developer.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search posts..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}