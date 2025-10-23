import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Cyber-Vault",
      description: "CyberVault is a local-first desktop app built with Electron and React that securely stores sensitive data offline using AES-256 encryption and biometric authentication.",
      technologies: ["TypeScript", "Electron", " Python", "WebAuthn", "AES-256", "PBKDF2"],
      year: "2025",
      category: "Full Stack",
      features: [
        "End-to-end AES-256 file encryption",
        "Multi-factor biometric authentication",
        "Secure master password & PIN protection",
        "100% offline with no cloud dependency",
        "Built with React, TypeScript, and Electron",
        "OCR support & secure backup options"
      ],
      githubUrl: "https://github.com/rudranshhere009/Cyber-Vault",
      liveUrl: null,
      color: "primary"
    },
    {
      title: "AI Image Generator",
      description: "A Flutter application that leverages AI to generate high-quality images from text prompts. Features include real-time generation, image history, and customizable parameters.",
      technologies: ["Flutter", "BLoC", "Image API", "State Management", "Custom UI"],
      year: "2025",
      category: "Mobile App",
      features: [
        "Real-time AI image generation",
        "History and favorites system",
        "Customizable generation parameters",
        "High-quality image output"
      ],
      githubUrl: "https://github.com/JASLEENKAUR13/ImageGenerator",
      liveUrl: null,
      color: "primary"
    },
    {
      title: "Blog Application",
      description: "A comprehensive blog platform built with Flutter and Supabase. Features include user authentication, real-time updates, and a rich text editor for content creation.",
      technologies: ["Flutter", "BLoC", "Supabase", "Authentication", "Real-time"],
      year: "2025",
      category: "Full Stack",
      features: [
        "User authentication & profiles",
        "Rich text editor with media support",
        "Real-time comments and reactions",
        "Responsive design across devices"
      ],
      githubUrl: "https://github.com/JASLEENKAUR13/blogApp",
      liveUrl: null,
      color: "accent"
    },

    {
      title: "Pomodoro Productivity App",
      description: "A beautiful productivity application implementing the Pomodoro Technique. Features include customizable timers, statistics tracking, and focus session management.",
      technologies: ["Flutter", "BLoC", "Local Storage", "Notifications", "UI/UX"],
      year: "2025",
      category: "Productivity",
      features: [
        "Customizable timer intervals",
        "Focus session statistics",
        "Background notifications",
        "Beautiful, distraction-free UI"
      ],
      githubUrl: "https://github.com/JASLEENKAUR13/Pomotask",
      liveUrl: null,
      color: "accent"
    },
    {
      title: "Weather Application",
      description: "A modern weather app built with Flutter and Kotlin Coroutines. Provides real-time weather data, forecasts, and location-based services with a sleek interface.",
      technologies: ["Flutter", "BLoC", "Kotlin Coroutines", "Weather API", "Geolocation"],
      year: "2024",
      category: "Mobile App",
      features: [
        "Real-time weather data",
        "7-day weather forecast",
        "Location-based services",
        "Beautiful weather animations"
      ],
      githubUrl: "https://github.com/JASLEENKAUR13/WeatherForeCastApp",
      liveUrl: null,
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creativity through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glass-card border-0 project-card overflow-hidden group">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`p-6 ${project.color === 'primary'
                      ? 'bg-gradient-to-br from-primary/10 to-primary/5'
                      : 'bg-gradient-to-br from-accent/10 to-accent/5'
                    }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.year}</p>
                      </div>
                      {/* <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="p-2" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" variant="ghost" className="p-2" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div> */}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs ${project.color === 'primary'
                              ? 'border-primary/30 text-primary'
                              : 'border-accent/30 text-accent'
                            }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                              }`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className={`flex-1 ${project.color === 'primary' ? 'btn-hero' : ''
                            }`}
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/JASLEENKAUR13" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;