"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  date: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-primary rounded-full" />
            {index !== items.length - 1 && (
              <div className="w-0.5 h-full bg-border" />
            )}
          </div>
          <div className="pb-8">
            <div className="text-sm text-muted-foreground">{item.date}</div>
            <div className="text-lg font-medium mt-1">{item.title}</div>
            <div className="text-muted-foreground mt-2">{item.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}