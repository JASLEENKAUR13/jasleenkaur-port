import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Results-driven Software Engineering student with expertise in computer science fundamentals 
              and a passion for developing innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate Software Engineering student at <strong>Guru Gobind Singh Indraprastha University</strong> 
                  with a strong foundation in computer science fundamentals. My expertise spans across mobile and web development, 
                  with particular proficiency in <strong>Flutter</strong>, <strong>React.js</strong>, and <strong>full-stack development</strong>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  What drives me is the challenge of transforming complex problems into elegant, user-friendly solutions. 
                  I combine technical proficiency with creative problem-solving to build applications that make a real difference. 
                  My experience includes developing scalable mobile applications, implementing robust backend services, 
                  and creating intuitive user interfaces.
                </p>

                <p className="text-lg leading-relaxed">
                  Currently maintaining a <strong>GPA of 8.7/10</strong> while actively contributing to open-source projects 
                  and participating in hackathons. I'm always eager to learn new technologies and collaborate on innovative projects.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 glass-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 glass-card rounded-lg">
                  <div className="text-2xl font-bold text-accent">8.7/10</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>
              </div>
            </div>

            {/* Right Column - Education & Contact */}
            <div className="space-y-6">
              {/* Education */}
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-foreground">
                            B.Tech Information Technology
                          </h4>
                          <p className="text-muted-foreground">
                            Guru Gobind Singh Indraprastha University
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Nov 2022 - July 2026</span>
                            </div>
                            <div className="text-primary font-medium">GPA: 8.7/10</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-border/50 pt-4">
                          <h4 className="font-medium text-foreground">
                            Senior Secondary (Class XII)
                          </h4>
                          <p className="text-muted-foreground">
                            Guru Harkishan Public School
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>2022</span>
                            </div>
                            <div className="text-primary font-medium">Score: 89%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location & Contact */}
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground mb-2">West Delhi, India</p>
                      <p className="text-sm text-muted-foreground">
                        Available for remote work and collaboration across different time zones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications Preview */}
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">160 Days Problem Solving</span>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">GeeksforGeeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Smart India Hackathon</span>
                      <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">Semi-finalist</span>
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

export default About;