"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Share2 } from "lucide-react"

const categories = ["All", "React", "Next.js", "Django", "REST APIs", "Freelancing"] as const
type Category = (typeof categories)[number]

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  category: Category
  date: string
  readTime: string
  imageUrl: string
  tags: string[]
  relatedLinks?: { title: string; url: string }[]
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding SSR in Next.js",
    excerpt: "A deep dive into Server-Side Rendering in Next.js and its benefits for web applications.",
    category: "Next.js",
    date: "2024-03-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["Next.js", "SSR", "React", "Performance"],
    content: "Server-Side Rendering (SSR) in Next.js offers a robust solution for delivering dynamic content with improved performance and SEO. This post delves into the mechanics of SSR, comparing it with Client-Side Rendering (CSR) and Static Site Generation (SSG). We'll discuss how SSR can reduce the time to first byte (TTFB) and enhance user experience by serving fully rendered HTML from the server. Additionally, we'll cover practical examples of implementing SSR in Next.js and best practices to optimize server-rendered applications for scale and reliability."
  },
  {
    id: "2",
    title: "Building REST APIs with Django",
    excerpt: "Learn how to create robust and scalable REST APIs using Django REST framework.",
    category: "Django",
    date: "2024-03-10",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    tags: ["Django", "REST APIs", "Python", "Backend"],
    content: "REST APIs are the backbone of modern web and mobile applications, and Django REST Framework (DRF) makes building them straightforward and efficient. In this article, we walk through creating a scalable REST API using Django, covering the essential components like serializers, views, and routers. We'll also explore how to handle authentication, permissions, and pagination to make your APIs robust and secure. By the end of this post, you'll have a solid foundation to build and deploy REST APIs with Django in your projects."
  },
  {
    id: "3",
    title: "Freelancing Tips for Developers",
    excerpt: "Essential tips and strategies for developers starting their freelancing journey.",
    category: "Freelancing",
    date: "2024-03-05",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    tags: ["Freelancing", "Career", "Tips"],
    content: "Starting a freelancing career can be daunting, especially for developers used to structured work environments. This post provides practical advice on how to navigate the transition to freelancing, from building a solid portfolio to finding your first clients. We discuss pricing strategies, time management, and tools that can help streamline your workflow. Whether you're considering freelancing as a side hustle or a full-time career, these tips will help you set the stage for success and growth in the competitive freelancing market."
  },
  {
    id: "4",
    title: "React Performance Optimization",
    excerpt: "Advanced techniques for optimizing React applications for better performance.",
    category: "React",
    date: "2024-03-01",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tags: ["React", "Performance", "JavaScript"],
    content: "Optimizing performance in React applications is crucial for delivering fast and responsive user experiences. This article covers advanced techniques for improving React app performance, including the use of memoization, lazy loading, and code splitting. We also discuss how to profile React components to identify bottlenecks and optimize rendering. By the end of this post, you'll be equipped with the tools and strategies to boost the performance of your React applications, ensuring they run smoothly and efficiently, even under heavy load."
  }
]

interface BlogPostDialogProps {
  post: BlogPost | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function BlogPostDialog({ post, open, onOpenChange }: BlogPostDialogProps) {
  if (!post) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{post.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge>{post.category}</Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-lg font-medium text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-4 space-y-4">
              {post.content ?
                post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))
                : 
                <p>{post.excerpt}</p>
              }
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {post.relatedLinks && (
            <div className="space-y-4">
              <h3 className="font-semibold">Related Resources</h3>
              <div className="space-y-2">
                {post.relatedLinks.map((link) => (
                  <Button
                    key={link.title}
                    variant="link"
                    className="h-auto p-0 text-primary"
                  >
                    {link.title}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

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
              <Card 
                className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
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
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Blog Post Dialog */}
        <BlogPostDialog
          post={selectedPost}
          open={!!selectedPost}
          onOpenChange={() => setSelectedPost(null)}
        />
      </motion.div>
    </div>
  )
}