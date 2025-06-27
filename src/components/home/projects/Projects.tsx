"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Server } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectsData = [
  {
    id: 1,
    image: "https://i.ibb.co/xK2PY8FM/Screenshot-2025-02-06-122731.png",
    liveLink: "https://earnify-life210.surge.sh/",
    clientLink: "https://github.com/walid-official/earn-money",
    serverLink: "https://github.com/walid-official/earn-money-server",
    name: "Earnify Platform",
    description:
      "A MERN-based micro-tasking platform where users can perform, create, and manage tasks while earning coins. Features tailored roles for Workers, Buyers, and Admins.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    category: "Full Stack",
  },
  {
    id: 2,
    image: "https://i.ibb.co/T8x1xkd/Screenshot-2025-01-04-192322.png",
    liveLink: "https://education-service-d2fdb.web.app",
    clientLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-walid-official",
    serverLink: "https://github.com/programming-hero-web-course2/b10a11-server-side-walid-official",
    name: "Educational Service",
    description:
      "A platform connecting students with qualified tutors, offering personalized sessions, resource sharing, and progress tracking for diverse learning needs.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    category: "Education",
  },
  {
    id: 3,
    image: "https://i.ibb.co/FmJjN0X/Screenshot-2025-01-04-185622.png",
    liveLink: "https://coffee-store8809.surge.sh",
    clientLink: "https://github.com/walid-official/coffee-store/tree/main/coffee-store-client",
    serverLink: "https://github.com/walid-official/coffee-store/tree/main/coffee-store-server",
    name: "Coffee Shop Manager",
    description:
      "A comprehensive platform for coffee shop management with inventory tracking, order processing, and customer engagement features.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Business",
  },
]

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projectsData.length - 2))
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, projectsData.length - 2)) % Math.max(1, projectsData.length - 2))
  }

  const getVisibleProjects = () => {
    if (projectsData.length <= 3) return projectsData

    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projectsData.length
      visible.push(projectsData[index])
    }
    return visible
  }

  const visibleProjects = getVisibleProjects()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the diversity of work through my lens. From capturing the essence of brands to creating compelling
            narratives, each project tells a unique story of creativity and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleProjects.map((project, index) => (
              <Card
                key={`${project.id}-${currentIndex}`}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow-lg ${
                  index === 1 ? "lg:col-span-1" : "lg:col-span-1"
                } ${selectedProject === project.id ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0 h-80 relative">
                  {index === 1 && selectedProject === project.id ? (
                    // Expanded card with details
                    <div className="h-full bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 flex flex-col justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-white/30 text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" asChild className="flex-1">
                          <Link href={project.liveLink} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Link href={project.clientLink} target="_blank">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Image card
                    <div className="relative h-full overflow-hidden rounded-2xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-sm mb-1">{project.name}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          {projectsData.length > 3 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:bg-white"
                onClick={prevProject}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:bg-white"
                onClick={nextProject}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {/* Selected Project Details */}
        {selectedProject && (
          <Card className="mt-8 border-0 shadow-lg">
            <CardContent className="p-8">
              {(() => {
                const project = projectsData.find((p) => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge variant="secondary" className="mb-4">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild>
                          <Link href={project.liveLink} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.clientLink} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Client
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.serverLink} target="_blank">
                            <Server className="w-4 h-4 mr-2" />
                            Server
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
