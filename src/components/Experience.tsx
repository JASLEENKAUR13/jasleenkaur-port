import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Intern",
      location: "Delhi, India",
      period: "July 2024",
      type: "Internship",
      description: "Contributed to the design and development of internal web applications to optimize naval data and workflows. Worked across the stack using React.js, Node.js, and PostgreSQL to deliver scalable solutions.",
      responsibilities: [
        "Integrated role-based authentication and management using APIs to ensure security",
        "Implemented interactive dashboards and secure APIs to improve visibility into naval operations",
        "Delivered scalable solutions using modern web technologies",
        "Collaborated with team members to optimize application performance"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "API Integration", "Authentication"],
      achievements: [
        "Successfully delivered scalable web applications",
        "Improved data visibility through interactive dashboards",
        "Implemented secure authentication systems"
      ]
    }
  ];

  const certifications = [
    {
      title: "160 Days of Problem Solving",
      issuer: "GeeksforGeeks",
      date: "February 2025",
      description: "Demonstrated advanced problem-solving capabilities through consistent practice and algorithm implementation.",
      type: "Certification",
      url: "https://geeksforgeeks.org"
    },
    {
      title: "Smart India Hackathon - Semi Finalist",
      issuer: "Guru Gobind Singh Indraprastha University",
      date: "April 2025",
      description: "Achieved semi-finalist status in a competitive environment, demonstrating innovative problem-solving skills and teamwork.",
      type: "Achievement",
      url: null
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building real-world solutions and gaining valuable industry experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-2 h-8 bg-primary rounded-full mr-4"></div>
                Work Experience
              </h3>
              
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-card border-0 project-card">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h5 className="font-medium mb-3 text-sm uppercase tracking-wide">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-medium mb-3 text-sm uppercase tracking-wide">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-medium mb-3 text-sm uppercase tracking-wide">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications & Achievements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-2 h-8 bg-accent rounded-full mr-4"></div>
                Certifications & Achievements
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card border-0 project-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-accent font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{cert.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Badge variant="secondary">
                            {cert.type}
                          </Badge>
                          {cert.url && (
                            <a 
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-muted/50 rounded-md transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info Card */}
              <Card className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-3">Open to Opportunities</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently seeking internship and full-time opportunities in software development, 
                    mobile app development, and full-stack engineering roles.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-primary">Available</div>
                      <div className="text-muted-foreground">Remote Work</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-accent">Open to</div>
                      <div className="text-muted-foreground">Relocation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;